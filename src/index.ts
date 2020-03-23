import { AxiosRequestConfig } from './types'
import { buildURL } from './helper/url'
import { transformRequest } from './helper/data'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
/**
 * 处理请求config
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}
/**
 * 处理url
 * @param config
 */
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config
  return transformRequest(data)
}
export default axios
