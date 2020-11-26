import { IFindUserByEmailRepository } from "@/data/protocols";
import { ICompare } from "@/data/protocols/bcryptAdapter/ICompare.interface";
import { ISign } from "@/data/protocols/jwtAdapter/signJwt.interface";
import { ISignIn, ISignInDTO, ISignInResult } from "@/domain/usecases/signin/signIn.interface";

export class DbSignIn implements ISignIn {
  constructor (
    private readonly Sign: ISign,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,
    private readonly bcryptCompare: ICompare
  ) {}

  async signIn (data: ISignInDTO): Promise<ISignInResult> {
    const { email, password } = data

    const user = await this.findUserByEmailRepo.findEmail(email)

    if (!user) return null

    const comparePassword = await this.bcryptCompare.compare(password, user.password_hash)

    return {
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      token: this.Sign.sign(1)
    }
  }
}
