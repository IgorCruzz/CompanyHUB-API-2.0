import { IGenerateCrypto } from "@/data/protocols/crypto/generateCrypto.interface"
import { ISaveTokenRepository } from "@/data/protocols/db/token/saveTokenRepository.interface"
import { ICreateUserRepository } from "@/data/protocols/db/user/createUserRepository.interface"
import { IFindUserByEmailRepository } from "@/data/protocols/db/user/findUserRepository.inteface"
import { IAddUser, IAddUserDTO } from "@/domain/usecases/user/addUser.interface"
import { User } from "@/infra/db/typeorm/entities/User.entity"

export class DbAddUser implements IAddUser {
  constructor (
    private readonly generateCrypto: IGenerateCrypto,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,
    private readonly createUserRepo: ICreateUserRepository,
    private readonly saveTokenRepo: ISaveTokenRepository
  ) {}

  async add(data: IAddUserDTO): Promise<User | null> {
    const { email } = data

    const userEmail = await this.findUserByEmailRepo.findEmail(email)

    if (userEmail) return null

    const user = await this.createUserRepo.create({
      ...data,
      password_hash: 'efefffe'
    })

    const token = this.generateCrypto.generate(16)

    await this.saveTokenRepo.saveToken(
      {
        token,
        user_id: user.id
      }
    )

    return user

  }

}
