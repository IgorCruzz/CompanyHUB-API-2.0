import { ISignIn, ISignInDTO, ISignInResult } from '@/domain/usecases/signin/signIn.interface'

export const mockDbSignIn = (): ISignIn => {
  class DbSignInStub implements ISignIn {
    async signIn (data: ISignInDTO): Promise<ISignInResult> {
      return Promise.resolve({
        id: 1,
        email: 'user@mail.com',
        name: 'name',
        token: 'token'
      })
    }
  }

  return new DbSignInStub()
}
