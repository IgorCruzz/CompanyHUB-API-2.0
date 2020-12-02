import { IFindAllServices } from '@/domain/usecases/service/findAllService.interface'
import { Ok, ServerError } from '@/presentation/http/http-helper'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindAllServicesController implements IController {
  constructor (
    private readonly dbFindAllServices: IFindAllServices
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const services = await this.dbFindAllServices.findAll()

      return Ok(services)
    } catch (err) {
      return ServerError(err)
    }
  }
}
