import { IValidation } from '@/data/protocols/yup/validation.interface'
import { IHttpRequest, IHttpResponse, IMiddleware } from '@/presentation/protocols'

export class ValidatorDecorator implements IMiddleware {
  constructor (private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const result = await this.validation.validate(httpRequest)

    if (!result.validate) {
      return {
        status: 401,
        body: {
          message: result.err.errors
        }
      }
    }

    return {
      status: 200,
      body: {}
    }
  }
}
