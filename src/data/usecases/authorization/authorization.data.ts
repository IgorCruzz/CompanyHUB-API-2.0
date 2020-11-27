import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";
import { IVerify } from "@/data/protocols/jwtAdapter/verifyJwt.interface";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";

export class DbAuthorization implements IAuthorization {
  constructor(
    private readonly Verify: IVerify,
    private readonly findUserByIdRepository: IFindUserByIdRepository,
  ) {}

  async auth (data: any): Promise<any> {

    const decoded = await this.Verify.verify(data.token)

    if(!decoded) return { error: 'Token inválido.' }

    const user = await this.findUserByIdRepository.findId(decoded.id)

    return decoded
  }

}
