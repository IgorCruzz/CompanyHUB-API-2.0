import { ICompare } from '@/data/protocols/bcryptAdapter/ICompare.interface'
import { IHasher } from '@/data/protocols/bcryptAdapter/IHasher.interface'
import { IFindUserByIdRepository } from '@/data/protocols/db/user/findUserByIdRepository.interface'
import { IFindUserByEmailRepository } from '@/data/protocols/db/user/findUserRepository.inteface'
import {
  IUpdateUserDTO,
  IUpdateUserRepository,
} from '@/data/protocols/db/user/updateUserRepository.interface'
import {
  IUpdateResult,
  IUpdateUser,
} from '@/domain/usecases/user/updateUser.interface'

export class DbUpdateUser implements IUpdateUser {
  constructor(
    private readonly findUserByIdRepository: IFindUserByIdRepository,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,
    private readonly UpdateUserRepo: IUpdateUserRepository,
    private readonly bcryptCompare: ICompare,
    private readonly hasher: IHasher
  ) {}

  async update(id: number, data: IUpdateUserDTO): Promise<IUpdateResult> {
    const user = await this.findUserByIdRepository.findId(id)

    if (!user) return { error: 'Não existe um usuário com este ID.' }

    const { password, confirmPassword, ...rest } = data

    if (rest.email) {
      if (user.email !== rest.email) {
        const findMail = await this.findUserByEmailRepo.findEmail(rest.email)

        if (findMail)
          return { error: 'Este e-mail já está em uso, escolha outro' }
      }
    }

    if (data.oldPassword) {
      const comparePassword = await this.bcryptCompare.compare(
        data.oldPassword,
        user.password_hash
      )

      if (!comparePassword) return { error: 'A senha está incorreta' }

      const { oldPassword, ...rest } = data

      const updated = await this.UpdateUserRepo.update(user.id, {
        password_hash: await this.hasher.hash(password),
        ...rest,
      })

      return { updated }
    }

    const updated = await this.UpdateUserRepo.update(user.id, {
      ...data,
    })

    return { updated }
  }
}
