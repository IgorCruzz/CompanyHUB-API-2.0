import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class SignInController implements IController {
  constructor (
    private readonly dbSignInData: ISignIn
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const signIn = await this.dbSignInData.signIn(httpRequest.body)

      if (signIn.error) {
        return {
          statusCode: 401,
          body: { message: signIn?.error }
        }
      }

      return {
        statusCode: 200,
        body: signIn
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
