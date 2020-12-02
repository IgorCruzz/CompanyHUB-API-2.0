import { IFindAllCompany } from '@/domain/usecases/company/findAllCompanies.interface'
import { Ok, ServerError } from '@/presentation/http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class FindAllCompanyController implements IController {
  constructor (private readonly DbFindAllCompany: IFindAllCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const company = await this.DbFindAllCompany.findAll()
      return Ok(company)
    } catch (err) {
      return ServerError(err)
    }
  }
}
