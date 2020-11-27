import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'
import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly dbAuthorization: IAuthorization,
    private readonly role: boolean
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { authorization } = httpRequest.headers

      if (!authorization) {
        return {
          statusCode: 401,
          body: { message: 'Insira o token.' }
        }
      }

      const [, token] = authorization.split(' ')

      const authUser = await this.dbAuthorization.auth({
        token,
        role: this.role
      })

      if (authUser.error) {
        return {
          statusCode: 401,
          body: { message: authUser.error }
        }
      }

      return {
        statusCode: 200,
        body: authUser
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
