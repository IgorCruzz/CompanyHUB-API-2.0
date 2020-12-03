import { IDeleteService } from '@/domain/usecases/service/deleteService.interface'
import { BadRequest, Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class DeleteServiceController implements IController {
  constructor(private readonly dbDeleteService: IDeleteService) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest
      const { product_id } = httpRequest.body
      const { id } = httpRequest.params

      const service = await this.dbDeleteService.delete({
        id,
        product_id,
        user: userId,
      })

      if (service.error) return BadRequest(service.error)

      return Ok({ message: 'Serviço deletado com sucesso!' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
