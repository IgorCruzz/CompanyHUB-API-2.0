import { IFindUserByEmailRepository } from "@/data/protocols";
import { ISign } from "@/data/protocols/jwtAdapter/signJwt.interface";
import { ISignIn, ISignInDTO, ISignInResult } from "@/domain/usecases/signin/signIn.interface";

export class DbSignIn implements ISignIn {
  constructor (
    private readonly Sign: ISign,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository
  ) {}

  async signIn (data: ISignInDTO): Promise<ISignInResult> {
    const { email, password } = data

    const user = await this.findUserByEmailRepo.findEmail(email)

    if (!user) return null

    return {
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      token: this.Sign.sign(1)
    }
  }
}
