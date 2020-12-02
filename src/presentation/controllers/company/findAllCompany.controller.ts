import { IFindAllCompany } from '@/domain/usecases/company/findAllCompanies.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class FindAllCompanyController implements IController {
  constructor (private readonly DbFindAllCompany: IFindAllCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const findCompanies = await this.DbFindAllCompany.findAll()
      return {
        status: 200,
        body: findCompanies
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
