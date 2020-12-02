import { IHttpRequest, IHttpResponse } from './http.inteface'

export interface IMiddleware {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>
}
