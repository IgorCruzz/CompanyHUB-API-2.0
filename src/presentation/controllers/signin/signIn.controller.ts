import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class SignInController implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return Promise.resolve({
      statusCode: 200,
      body: {}
    })
  }
}
