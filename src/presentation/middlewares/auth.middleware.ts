import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'
import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'
import { BadRequest, Ok, ServerError } from '../http/http-helper'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly dbAuthorization: IAuthorization,
    private readonly role: boolean
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { authorization } = httpRequest.headers

      if (!authorization) return BadRequest('Insira o token.')

      const [, token] = authorization.split(' ')

      const authUser = await this.dbAuthorization.auth({
        token,
        role: this.role,
        params: { id: Number(httpRequest.params.id) }
      })

      if (authUser.error) return BadRequest(authUser.error)

      return Ok({ userId: authUser.id })
    } catch (err) {
      return ServerError(err)
    }
  }
}
