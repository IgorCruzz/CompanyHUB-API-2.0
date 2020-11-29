import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateCompanyController implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return await null
  }
}
