import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
import { BadRequest, Ok, ServerError } from '@/presentation/http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class SignInController implements IController {
  constructor (private readonly dbSignInData: ISignIn) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const signIn = await this.dbSignInData.signIn(httpRequest.body)

      if (signIn.error) return BadRequest(signIn.error)

      return Ok(signIn)
    } catch (err) {
      return ServerError(err)
    }
  }
}
