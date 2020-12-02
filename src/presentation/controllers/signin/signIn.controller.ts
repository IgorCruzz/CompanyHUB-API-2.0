import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
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

      if (signIn.error) {
        return {
          status: 401,
          body: { message: signIn.error }
        }
      }

      return {
        status: 200,
        body: signIn
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
