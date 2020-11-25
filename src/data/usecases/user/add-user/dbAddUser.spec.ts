import { IAddUserDTO, ICreateTokenDTO, ICreateTokenRepository, ICreateUserRepository, IFindUserByEmailRepository, IGenerateCrypto, IHasher } from "@/data/protocols";
import { IUserModel } from "@/domain/models/user.interface";
import { Token } from "@/infra/db/typeorm/entities/Token.entity";

import { DbAddUser } from "./dbAddUser";

let dbAddUser: DbAddUser
let cryptoAdapter: CryptoAdapterStub
let userRepository: UserRepositoryStub
let tokenRepository: TokenRepositoryStub
let bcryptAdapter: BcryptAdapterStub


class CryptoAdapterStub implements IGenerateCrypto {
  generate (randomBytes: number): string {
    return 'VALUE'
  }
}

class UserRepositoryStub  implements
IFindUserByEmailRepository,
ICreateUserRepository {
  async findEmail (email: string): Promise<IUserModel| undefined> {

    return Promise.resolve(undefined)
  }

  async create (data: IAddUserDTO): Promise<IUserModel> {
    return Promise.resolve({
      id: 1,
      name: 'name',
      email: 'user@mail.com'
    })
  }
}

class TokenRepositoryStub implements ICreateTokenRepository {
  async create (data: ICreateTokenDTO): Promise<Token> {


    return Promise.resolve({
      user_id: 1,
      token: 'token'
    })
  }
}

class BcryptAdapterStub implements IHasher {
  async hash (value: string): Promise<string> {
    return Promise.resolve('hashed_password')
  }
}

describe('DbAddUser  Data', () => {
  beforeEach(() => {
    cryptoAdapter = new CryptoAdapterStub()
    userRepository = new UserRepositoryStub()
    tokenRepository = new TokenRepositoryStub()
    bcryptAdapter = new BcryptAdapterStub()
    dbAddUser = new DbAddUser(
      cryptoAdapter,
      userRepository,
      userRepository,
      tokenRepository,
      bcryptAdapter
    )
  })

  it('should be defined', () => {
    expect(dbAddUser).toBeDefined()
  })

  it('should be able to call UserRepository with success', async () => {
    const res = jest.spyOn(userRepository, 'create')

    await dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password'
    })

    expect(res).toHaveBeenCalledWith({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'hashed_password'
    })


  })
});
