import { IAddService } from '@/domain/usecases/service/addService.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class CreateServiceController implements IController {
  constructor (
    private readonly addService: IAddService
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest

      const service = await this.addService.add({
        user: userId,
        ...httpRequest.body
      })

      if (service.error) {
        return {
          status: 401,
          body: { message: service.error }
        }
      }

      return {
        status: 200,
        body: service
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
