import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  intercepors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.intercepors = config.interceptors

    this.instance.interceptors.request.use(
      this.intercepors?.requestInterceptor,
      this.intercepors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.intercepors?.reponseInterceptor,
      this.intercepors?.reponseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
