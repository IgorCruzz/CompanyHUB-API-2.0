import { IAddCompany } from '@/domain/usecases/company/addCompany.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class CreateCompanyController implements IController {
  constructor (private readonly addCompany: IAddCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { name, cnpj } = httpRequest.body
      const { userId } = httpRequest

      const company = await this.addCompany.add({
        name,
        user: userId,
        cnpj
      })

      if (company.error) {
        return {
          statusCode: 401,
          body: { message: company.error }
        }
      }

      return {
        statusCode: 200,
        body: company
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
