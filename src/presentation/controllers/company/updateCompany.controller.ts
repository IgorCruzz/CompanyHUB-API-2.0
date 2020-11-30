import { IUpdateCompany } from '@/domain/usecases/company/updateCompany.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class UpdateCompanyController implements IController {
  constructor (private readonly dbUpdateCompany: IUpdateCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params

      const company = await this.dbUpdateCompany.update(id, {
        ...httpRequest.body,
        user: httpRequest.userId
      })

      if (company.error) {
        return {
          statusCode: 400,
          body: { message: company.error }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Empresa atualizada com sucesso!.' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
