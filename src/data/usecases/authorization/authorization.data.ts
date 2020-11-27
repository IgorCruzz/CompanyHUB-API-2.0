import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";
import { IVerify } from "@/data/protocols/jwtAdapter/verifyJwt.interface";

export class DbAuthorization implements IAuthorization {
  constructor(
    private readonly IVerify: IVerify
  ) {}

  async auth (data: any): Promise<any> {

    await this.IVerify.verify(data.token)

    return null
  }

}
