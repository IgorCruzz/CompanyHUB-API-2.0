import { IAddUser } from '@/domain/usecases/user/addUser'
import { Controller, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class SignupController implements Controller {
  constructor (
    private readonly AddUser: IAddUser
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { email, name, password } = httpRequest.body

    await this.AddUser.add({
      email,
      name,
      password
    })

    return {
      statusCode: 200,
      body: {
        oi: 'okokok'
      }
    }
  }
}
