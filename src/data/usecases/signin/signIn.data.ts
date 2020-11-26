import { ISignIn, ISignInDTO, ISignInResult } from "@/domain/usecases/signin/signIn.interface";

export class DbSignIn implements ISignIn {
  async signIn (data: ISignInDTO): Promise<ISignInResult> {
    return Promise.resolve(null)
  }
}
