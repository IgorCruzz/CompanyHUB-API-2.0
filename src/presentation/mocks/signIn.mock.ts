import {
  ISignIn,
  ISignInDTO,
  ISignInResult,
} from '@/domain/usecases/signin/signIn.interface'

export class DbSignInStub implements ISignIn {
  async signIn(data: ISignInDTO): Promise<ISignInResult> {
    return Promise.resolve({
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      token: 'token',
    })
  }
}
