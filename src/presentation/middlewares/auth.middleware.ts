import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'
import { IDbAuthorization } from '@/domain/usecases/authorization/authorization.interface'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly dbAuthorization: IDbAuthorization,
    private readonly role: boolean
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { authorization } = httpRequest.headers

      if (!authorization) {
        return {
          status: 401,
          body: { message: 'Insira o token.' }
        }
      }

      const [, token] = authorization.split(' ')

      const authUser = await this.dbAuthorization.auth({
        token,
        role: this.role,
        params: { id: Number(httpRequest.params.id) }
      })

      if (authUser.error) {
        return {
          status: 401,
          body: { message: authUser.error }
        }
      }

      return {
        status: 200,
        body: { userId: authUser.id }
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
