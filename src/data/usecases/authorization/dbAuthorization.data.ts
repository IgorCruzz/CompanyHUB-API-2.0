import {
  IDbAuthorization,
  IDbAuthorizationDTO,
  IDbAuthorizationResult,
} from '@/domain/usecases/authorization/authorization.interface'
import { IVerify } from '@/data/protocols/jwtAdapter/verifyJwt.interface'
import { IFindUserByIdRepository } from '@/data/protocols/db/user/findUserByIdRepository.interface'

export class DbAuthorization implements IDbAuthorization {
  constructor(
    private readonly Verify: IVerify,
    private readonly findUserByIdRepository: IFindUserByIdRepository
  ) {}

  async auth(data: IDbAuthorizationDTO): Promise<IDbAuthorizationResult> {
    const decoded = await this.Verify.verify(data.token)

    if (!decoded) return { error: 'Token inválido.' }

    const user = await this.findUserByIdRepository.findId(decoded.id)

    if (!user) return { error: 'Este token não pertence a nenhum usuário.' }

    if (data.role) {
      if (!user.administrator)
        return { error: 'Você não tem permissão para fazer isto.' }
    }

    return { id: decoded.id }
  }
}
