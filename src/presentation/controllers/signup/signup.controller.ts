import { IAddUser } from '@/domain/usecases/user/addUser.interface'
import { BadRequest, Created, ServerError } from '@/presentation/http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class SignupController implements IController {
  constructor (private readonly AddUser: IAddUser) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { email, name, password } = httpRequest.body

      const user = await this.AddUser.add({
        email,
        name,
        password_hash: password
      })

      if (user.error) return BadRequest(user.error)

      return Created(user)
    } catch (err) {
      return ServerError(err)
    }
  }
}
