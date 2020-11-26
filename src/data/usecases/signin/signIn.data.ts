import { ISign } from "@/data/protocols/jwtAdapter/signJwt.interface";
import { ISignIn, ISignInDTO, ISignInResult } from "@/domain/usecases/signin/signIn.interface";

export class DbSignIn implements ISignIn {
  constructor (
    private readonly Sign: ISign
  ) {}

  async signIn (data: ISignInDTO): Promise<ISignInResult> {
    return Promise.resolve({
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      token: this.Sign.sign(1)
    })
  }
}
