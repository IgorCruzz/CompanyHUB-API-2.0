import { IHasher } from "@/data/protocols/bcryptAdapter/IHasher.interface"
import { IGenerateCrypto } from "@/data/protocols/crypto/generateCrypto.interface"
import { ICreateTokenRepository } from "@/data/protocols/db/token/createTokenRepository.interface"
import { ICreateUserRepository } from "@/data/protocols/db/user/createUserRepository.interface"
import { IFindUserByEmailRepository } from "@/data/protocols/db/user/findUserRepository.inteface"
import { IAddUser, IAddUserDTO } from "@/domain/usecases/user/addUser.interface"
import { User } from "@/infra/db/typeorm/entities/User.entity"

export class DbAddUser implements IAddUser {
  constructor (
    private readonly generateCrypto: IGenerateCrypto,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,
    private readonly createUserRepo: ICreateUserRepository,
    private readonly createTokenRepo: ICreateTokenRepository,
    private readonly hasher: IHasher
  ) {}

  async add(data: IAddUserDTO): Promise<User | null> {
    const { email } = data

    const userEmail = await this.findUserByEmailRepo.findEmail(email)

    if (userEmail) return null

    const user = await this.createUserRepo.create({
      ...data,
      password_hash: await this.hasher.hash('fefedww')
    })

    const token = this.generateCrypto.generate(16)

    await this.createTokenRepo.create(
      {
        token,
        user_id: user.id
      }
    )

    return user

  }

}
