import { IDbFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindOneCompanyController implements IController {
  constructor (
    private readonly dbFindOneCompany: IDbFindOneCompany
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest

      const company = await this.dbFindOneCompany.findOne(userId)

      if (company.error) {
        return {
          statusCode: 400,
          body: { message: company.error }
        }
      }

      return {
        statusCode: 200,
        body: company
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
