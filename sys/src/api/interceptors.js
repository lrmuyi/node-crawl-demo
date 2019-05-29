import Axios from 'axios'
import Config from './config'
import base64 from 'base64-utf8'
import { encrypto, decrypto } from '../utils'
import { Message } from 'element-ui'
import router from '@/router'

/**
 * @param {isRefreshing} boolean 是否正在刷新
 * @param {refreshSubscribers} array 未执行任务队列
 */
let isRefreshing = false
let refreshSubscribers = []
const statusMessage = {
  '404': '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  '403': '你没有权限访问该页面。',
  '500': '服务器异常。'
}
/**
 * @msg 判断token是否过期
 * @returns boolean 当前token是否过期
 */
const isAccessTokenExpired = () => {
  let access = localStorage.getItem('accessToken')
  if (!access) return false
  access = decrypto(access, 121, 25)
  if (access.split('.').length < 3) {
    router.push('/login')
  }
  let code = access.split('.')[1] || ''
  return JSON.parse(base64.decode(code)).exp - 10 > new Date().getTime() / 1000
}

/**
 * @msg 将过期后的请求放入事件数组中
 * @param {*} cb fun 未执行回调
 */
function subscribeTokenRefresh (cb) {
  refreshSubscribers.push(cb)
}

/**
 * @msg 执行过期请求
 * @param {*} token string 新token
 */
function onRefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
  refreshSubscribers = []
}

/**
 * @msg 刷新refrshToken
 * @returns Promise
 */
function refreshtoken () {
  return new Promise(function (resolve, reject) {
    let refreshToken = decrypto(localStorage.getItem('refreshToken'), 121, 25)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', Config.baseURL.iamUrl + '/iam/admins/user/refresh/', true)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText), this)
        } else {
          var resJson = { code: this.status, response: this.response }
          reject(resJson, this)
        }
      }
    }
    xhr.send(JSON.stringify({ refresh: refreshToken }))
  })
}

Axios.interceptors.request.use(config => {
  // 判断使用哪个url
  switch (config.url.split('/')[1]) {
    case 'iam':
      config.baseURL = Config.baseURL.iamUrl
      break
    default:
      config.baseURL = Config.baseURL.apiUrl
      break
  }
  const access = decrypto(localStorage.getItem('accessToken'), 121, 25)
  // 判断请求url是否需要token
  if (Config.noToken.indexOf(config.url) === -1) {
    if (isAccessTokenExpired()) {
      config.headers['Authorization'] = `Bearer ${access}`
      return config
    } else {
      // 正在刷新token是将事件加入事件列表中
      if (isRefreshing) {
        let retry = new Promise((resolve, reject) => {
          subscribeTokenRefresh(token => {
            config.headers['Authorization'] = `Bearer ${token}`
            resolve(config)
          })
        })
        return retry
      } else {
        isRefreshing = true
        refreshtoken().then(
          res => {
            localStorage.setItem(
              'accessToken',
              encrypto(res.result.access, 121, 25)
            )
            isRefreshing = false
            onRefreshed(res.result.access)
          },
          err => {
            // 请求refreshToken失败跳转登录页并且不刷新
            if (err) {
              router.push('/login')
            }
          }
        )
        let retry = new Promise((resolve, reject) => {
          subscribeTokenRefresh(token => {
            config.headers['Authorization'] = `Bearer ${token}`
            resolve(config)
          })
        })
        return retry
      }
    }
  } else {
    return config
  }
})

Axios.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.status === 'ok') {
      return response.data
    } else {
      const errText = response.data ? response.data.msg : '接口错误'
      Message({
        message: errText,
        type: 'error'
      })
    }
  },
  err => {
    const { status } = err.response
    if (
      err.response &&
      err.response.data &&
      err.response.data.code === '1014'
    ) {
      router.push('/login')
    }
    const errText = err.response.data.msg
      ? err.response.data.msg
      : statusMessage[status]
        ? statusMessage[status]
        : '接口错误1'
    Message({
      message: errText,
      type: 'error'
    })

    if (status === 404) {
      router.push('/404')
    }
    if (status === 403) {
      router.push('/403')
    }
    if (status === 500) {
      router.push('/500')
    }

    return Promise.reject(err.response)
  }
)
export default Axios
