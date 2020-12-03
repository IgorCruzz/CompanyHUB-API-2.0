import { IAddService } from '@/domain/usecases/service/addService.interface'
import { BadRequest, Created, Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class CreateServiceController implements IController {
  constructor(private readonly addService: IAddService) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest

      const service = await this.addService.add({
        user: userId,
        ...httpRequest.body,
      })

      if (service.error) return BadRequest(service.error)

      return Created(service)
    } catch (err) {
      return ServerError(err)
    }
  }
}
