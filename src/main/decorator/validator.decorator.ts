import { IValidation } from '@/data/protocols/yup/validation.interface'
import { IHttpRequest, IHttpResponse } from '@/presentation/protocols'
import { IMiddleware } from '@/presentation/protocols/middleware'

export class ValidatorDecorator implements IMiddleware {
  constructor (
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const result = await this.validation.validate(httpRequest)

    if (result.validate === false) {
      return {
        statusCode: 401,
        body: {
          message: result.err.errors
        }
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
