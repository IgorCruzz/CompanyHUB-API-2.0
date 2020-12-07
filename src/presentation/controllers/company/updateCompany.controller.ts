import { IUpdateCompany } from '@/domain/usecases/company/updateCompany.interface'
import { BadRequest, Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class UpdateCompanyController implements IController {
  constructor(private readonly dbUpdateCompany: IUpdateCompany) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { updateId } = httpRequest.params
      const { userId } = httpRequest

      const company = await this.dbUpdateCompany.update(updateId, userId, {
        ...httpRequest.body,
      })

      if (company.error) return BadRequest(company.error)

      return Ok({ message: 'Empresa atualizada com sucesso!' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
