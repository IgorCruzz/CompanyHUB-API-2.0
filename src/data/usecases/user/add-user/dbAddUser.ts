import { ISaveTokenRepository } from "@/data/protocols/db/token/saveTokenRepository.interface"
import { IFindUserByEmailRepository } from "@/data/protocols/db/user/findUserRepository.inteface"
import { ISaveUserRepository } from "@/data/protocols/db/user/saveUserRepository.interface"
import { IAddUser, IAddUserDTO } from "@/domain/usecases/user/addUser"
import { User } from "@/infra/db/typeorm/entities/User.entity"

export class DbAddUser implements IAddUser {
  constructor (
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,
    private readonly saveUserRepo: ISaveUserRepository,
    private readonly saveTokenRepo: ISaveTokenRepository
  ) {}

  async add(data: IAddUserDTO): Promise<User | null> {
    const { email, name, password } = data

    const userEmail = await this.findUserByEmailRepo.findUserByEmail(email)

    if (userEmail) return null

    const user = await this.saveUserRepo.saveUser({
      email,
      name,
      password_hash: password
    })

    await this.saveTokenRepo.saveToken(
      {
        token: 'CRYPTO',
        user_id: user.id
      }
    )

    return user

  }

}
