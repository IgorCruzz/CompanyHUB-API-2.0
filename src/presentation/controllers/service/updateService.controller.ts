import { IDbUpdateService } from '@/domain/usecases/service/updateService.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateServiceController implements IController {
  constructor (
    private readonly dbUpdateService: IDbUpdateService
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params
      const { userId } = httpRequest

      const service = await this.dbUpdateService.update(id, userId, httpRequest.body)

      if (service.error) {
        return {
          statusCode: 401,
          body: { message: service.error }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Serviço atualizado com sucesso!' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
