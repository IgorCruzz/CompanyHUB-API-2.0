import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateUserController implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return Promise.resolve(null)
  }
}
