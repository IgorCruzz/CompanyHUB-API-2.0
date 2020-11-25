import { IAddUser } from '@/domain/usecases/user/addUser.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class SignupController implements IController {
  constructor (
    private readonly AddUser: IAddUser
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { email, name, password } = httpRequest.body

      const user = await this.AddUser.add({
        email,
        name,
        password_hash: password
      })

      if (!user) {
        return {
          statusCode: 401,
          body: {
            message: 'Este e-mail já está em uso, escolha outro.'
          }
        }
      }

      return {
        statusCode: 200,
        body: user
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
