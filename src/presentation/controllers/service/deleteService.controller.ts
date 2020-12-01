import { IDbDeleteService } from '@/domain/usecases/service/deleteService.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class DeleteServiceController implements IController {
  constructor (
    private readonly dbDeleteService: IDbDeleteService
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest
      const { product_id } = httpRequest.body
      const { id } = httpRequest.params

      const service = await this.dbDeleteService.delete({
        id,
        product_id,
        user: userId
      })

      if (service.error) {
        return {
          statusCode: 400,
          body: { message: service.error }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Serviço deletado com sucesso!' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
