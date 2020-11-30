import { IDbFindAllCompany } from '@/domain/usecases/company/findAllCompanies.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class FindAllCompanyController implements IController {
  constructor (private readonly DbFindAllCompany: IDbFindAllCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const findCompanies = await this.DbFindAllCompany.findAll()
      return {
        statusCode: 200,
        body: findCompanies
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
