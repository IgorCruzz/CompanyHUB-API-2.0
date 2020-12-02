import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import { BadRequest, Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class UpdateUserController implements IController {
  constructor (private readonly updateUser: IUpdateUser) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params
      const { userId } = httpRequest

      const user = await this.updateUser.update(id, userId, httpRequest.body)

      if (user.error) return BadRequest(user.error)

      return Ok({ message: 'Atualizado com sucesso.' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
