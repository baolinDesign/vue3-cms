// service 统一出口

import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    reponseInterceptor: (res) => {
      return res
    },
    reponseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
