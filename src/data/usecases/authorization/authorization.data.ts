import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";
import { IVerify } from "@/data/protocols/jwtAdapter/verifyJwt.interface";

export class DbAuthorization implements IAuthorization {
  constructor(
    private readonly Verify: IVerify
  ) {}

  async auth (data: any): Promise<any> {

    const decoded = await this.Verify.verify(data.token)

    return decoded
  }

}
