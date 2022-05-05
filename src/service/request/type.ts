import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  reponseInterceptor?: (res: AxiosResponse) => AxiosResponse
  reponseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
