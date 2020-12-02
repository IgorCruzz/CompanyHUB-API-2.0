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
          status: 401,
          body: { message: company.error }
        }
      }

      return {
        status: 200,
        body: company
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
