import { IHttpRequest, IHttpResponse } from './http'

export interface Controller {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>
}
