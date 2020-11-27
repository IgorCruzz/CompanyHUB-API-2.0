import jwt from 'jsonwebtoken'
import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'
import { getRepository } from 'typeorm'
import { User } from '../../infra/db/typeorm/entities/User.entity'

export class AuthMiddleware implements IMiddleware {
  constructor (
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

    const tokenVerify: any = await jwt.verify(token, 'f04af61b3f332afa0ceec786a42cd365', async (err: any, decodedd: any) => {
      if (decodedd) {
        httpRequest.userId = decodedd.id

        const user = getRepository(User)

        const verify = await user.findOne({ id: decodedd.id })

        if (!verify) {
          return {
            statusCode: 401,
            body: { message: 'Este token não pertence a nenhum usuário.' }
          }
        }

        if (this.role) {
          if (!verify.administrator && verify.id !== Number(httpRequest.params?.id)) {
            return {
              statusCode: 401,
              body: { message: 'Você não tem permissão para deletar outro usuário.' }
            }
          }
        }

        return {
          statusCode: 200,
          body: httpRequest
        }
      }

      if (err) {
        return {
          statusCode: 401,
          body: { message: 'Token inválido' }
        }
      }
    })

    return tokenVerify
  }
}
