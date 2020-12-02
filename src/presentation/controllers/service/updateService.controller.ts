import { IUpdateService } from '@/domain/usecases/service/updateService.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateServiceController implements IController {
  constructor (
    private readonly dbUpdateService: IUpdateService
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params
      const { userId } = httpRequest

      const service = await this.dbUpdateService.update(id, userId, httpRequest.body)

      if (service.error) {
        return {
          status: 401,
          body: { message: service.error }
        }
      }

      return {
        status: 200,
        body: { message: 'Serviço atualizado com sucesso!' }
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
