import Axios from './interceptors'
import Config from './config'

const handleRequest = (url = '', data = {}) => {
  return (reqConfig = {}) => {
    let req
    if (!reqConfig.method || /^get$/i.test(reqConfig.method)) {
      req = Axios.request(url, {
        ...Config.reqConfig,
        ...reqConfig,
        ...{ params: data }
      })
    } else if (
      /^patch$/i.test(reqConfig.method) ||
      /^delete$/i.test(reqConfig.method)
    ) {
      req = Axios.request(url, {
        ...Config.reqConfig,
        ...reqConfig,
        ...{ data: data }
      })
    } else {
      req = Axios.request(url, {
        ...Config.reqConfig,
        ...reqConfig,
        ...{ data: data }
      })
    }
    return req
  }
}

export default handleRequest
