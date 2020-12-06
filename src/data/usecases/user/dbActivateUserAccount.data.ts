import { IFindTokenRepository } from '@/data/protocols/db/token/findTokenRepository.interface'
import { IFindUserByIdRepository } from '@/data/protocols/db/user/findUserByIdRepository.interface'
import { IUpdateUserRepository } from '@/data/protocols/db/user/updateUserRepository.interface'
import {
  IActivateUserAccount,
  IActivateUserAccountResult,
} from '@/domain/usecases/user/activateUserAccount.interface'

export class DbActivateUserAccount implements IActivateUserAccount {
  constructor(
    private readonly findTokenRepository: IFindTokenRepository,
    private readonly findUserByIdRepository: IFindUserByIdRepository,
    private readonly updateUserRepository: IUpdateUserRepository
  ) {}

  async activate(token: string): Promise<IActivateUserAccountResult> {
    const tokenExists = await this.findTokenRepository.findToken({ token })

    if (!tokenExists) return { error: 'Token Invalído' }

    const user = await this.findUserByIdRepository.findId(tokenExists.user_id)

    const updated = await this.updateUserRepository.update(user.id, {
      activation: true,
    })

    return { updated }
  }
}
