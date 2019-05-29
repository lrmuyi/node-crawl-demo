/* eslint-disable quotes */
import handleRequest from './request'

let api = {}

// 登录
api.Login = data => {
  return handleRequest('/iam/auth/common/server/user/login/', data)({
    method: 'get'
  })
}

export default api
