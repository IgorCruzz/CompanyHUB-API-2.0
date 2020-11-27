import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class SignInController implements IController {
  constructor (
    private readonly dbSignInData: ISignIn
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const signIn = await this.dbSignInData.signIn(httpRequest.body)

    return Promise.resolve({
      statusCode: 200,
      body: signIn
    })
  }
}
