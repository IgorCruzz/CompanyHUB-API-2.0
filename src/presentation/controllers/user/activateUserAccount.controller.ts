import { IActivateUserAccount } from '@/domain/usecases/user/activateUserAccount.interface'
import { BadRequest, Ok, ServerError } from '@/presentation/http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class ActivateUserAccountController implements IController {
  constructor(private readonly activateUserAccount: IActivateUserAccount) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { token } = httpRequest.params

      const user = await this.activateUserAccount.activate(token)

      if (user.error) return BadRequest(user.error)

      return Ok({ message: 'Conta ativada com sucesso!' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
