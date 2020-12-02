import { IDbFindAllServices } from '@/domain/usecases/service/findAllService.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindAllServicesController implements IController {
  constructor (
    private readonly dbFindAllServices: IDbFindAllServices
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const services = await this.dbFindAllServices.findAll()

      return {
        status: 200,
        body: services
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
