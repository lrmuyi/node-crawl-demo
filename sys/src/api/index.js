/* eslint-disable quotes */
import handleRequest from './request'

let api = {}

// 登录
api.getMoviesList = () => {
  return handleRequest('/_api/movies/list/')({
    method: 'GET'
  })
}

api.postMovies = (data) => {
  return handleRequest('/_api/movies/item/', data)({
    method: 'POST'
  })
}

export default api
