import { IAddCompany } from '@/domain/usecases/company/addCompany.interface'
import { BadRequest, Created, ServerError } from '../../http/http-helper'
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

      if (company.error) return BadRequest(company.error)

      return Created(company)
    } catch (err) {
      return ServerError(err)
    }
  }
}
