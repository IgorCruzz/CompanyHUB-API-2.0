import { IHttpRequest, IHttpResponse } from './http.inteface'

export interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>
}
