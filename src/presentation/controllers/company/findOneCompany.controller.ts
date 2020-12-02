import { IFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import { BadRequest, Ok, ServerError } from '@/presentation/http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class FindOneCompanyController implements IController {
  constructor (private readonly dbFindOneCompany: IFindOneCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params

      const company = await this.dbFindOneCompany.findOne(id)

      if (company.error) return BadRequest(company.error)

      return Ok(company)
    } catch (err) {
      return ServerError(err)
    }
  }
}
