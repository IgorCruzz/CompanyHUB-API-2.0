import { IHasher } from '@/data/protocols/bcryptAdapter/IHasher.interface'
import { IGenerateCrypto } from '@/data/protocols/cryptoAdapter/generateCrypto.interface'
import { ICreateTokenRepository } from '@/data/protocols/db/token/createTokenRepository.interface'
import {
  IAddUserDTO,
  ICreateUserRepository,
} from '@/data/protocols/db/user/createUserRepository.interface'
import { IFindUserByEmailRepository } from '@/data/protocols/db/user/findUserRepository.inteface'
import { IAuthenticateMail } from '@/data/protocols/sendGridAdapter/sendMail.interface'
import { IAddResult, IAddUser } from '@/domain/usecases/user/addUser.interface'

export class DbAddUser implements IAddUser {
  constructor(
    private readonly generateCrypto: IGenerateCrypto,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,
    private readonly createUserRepo: ICreateUserRepository,
    private readonly createTokenRepo: ICreateTokenRepository,
    private readonly hasher: IHasher,
    private readonly authenticateMail: IAuthenticateMail
  ) {}

  async add(data: IAddUserDTO): Promise<IAddResult> {
    const { email, password_hash } = data

    const userEmail = await this.findUserByEmailRepo.findEmail(email)

    if (userEmail) return { error: 'Já existe um usuário com este e-mail.' }

    const user = await this.createUserRepo.create({
      ...data,
      password_hash: await this.hasher.hash(password_hash),
    })

    const token = this.generateCrypto.generate(16)

    await this.createTokenRepo.create({
      token,
      user_id: user.id,
    })

    await this.authenticateMail.authenticateUser({
      email: user.email,
      name: user.name,
      token,
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }
}
