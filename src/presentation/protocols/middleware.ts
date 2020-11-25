import { IHttpRequest, IHttpResponse } from './http'

export interface IMiddleware {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>
}
