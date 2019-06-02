export default {
  // 请求的默认配置
  baseURL: {
    // apiUrl: process.env.VUE_APP_apiUrl
    apiUrl: 'http://localhost:3000'
  },
  noToken: ['/iam/auth/common/server/user/login/', '/iam/admins/user/refresh/'],
  reqConfig: {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    // withCredentials: true
  }
}
