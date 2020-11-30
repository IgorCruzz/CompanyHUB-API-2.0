import { IDbDeleteCompany } from '@/domain/usecases/company/deleteCompany.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class DeleteCompanyController implements IController {
  constructor (private readonly deleteCompany: IDbDeleteCompany) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId, params } = httpRequest

      const deleteCompany = await this.deleteCompany.delete({
        params: { id: params.id },
        user: userId
      })

      if (deleteCompany.error) {
        return {
          statusCode: 400,
          body: { message: deleteCompany.error }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Empresa deletada com sucesso!.' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
