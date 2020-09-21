import request from './axios.config'

export function login_API(params) {
  return request('post', '/api/login', params)
}
export function sign_API(params) {
  return request('post', '/api/sign', params)
}