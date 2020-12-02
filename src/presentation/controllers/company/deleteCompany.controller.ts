import { IDeleteCompany } from '@/domain/usecases/company/deleteCompany.interface'
import { BadRequest, Ok, ServerError } from '@/presentation/http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class DeleteCompanyController implements IController {
  constructor (private readonly deleteCompany: IDeleteCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest
      const { id } = httpRequest.params

      const company = await this.deleteCompany.delete({
        params: { id },
        user: userId
      })

      if (company.error) return BadRequest(company.error)

      return Ok({ message: 'Empresa deletada com sucesso!.' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
