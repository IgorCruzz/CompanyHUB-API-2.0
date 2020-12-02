import { IDbFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class FindOneCompanyController implements IController {
  constructor (private readonly dbFindOneCompany: IDbFindOneCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params

      const company = await this.dbFindOneCompany.findOne(id)

      if (company.error) {
        return {
          status: 400,
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
