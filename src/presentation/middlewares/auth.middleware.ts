import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'
import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly dbAuthorization: IAuthorization,
    private readonly role?: string
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { authorization } = httpRequest.headers

    if (!authorization) {
      return {
        statusCode: 401,
        body: { message: 'Insira o token.' }
      }
    }

    const [, token] = authorization.split(' ')

    await this.dbAuthorization.auth(token)
  }
}
