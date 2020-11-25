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
    return 'TOKEN_GENERATED'
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
  tokenRepository
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

  it('returns null if already has a user with email passed on request', async () => {
    jest.spyOn(userRepository, 'findEmail').mockResolvedValue({
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'hashed_password'
    })

    const res = await dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password'
    })

    expect(res).toBeNull()

  })

  it('should be generate a token', async () => {
    const res =  cryptoAdapter.generate(16)

    expect(res).toBe('TOKEN_GENERATED')
  })

  it('should be able to call createTokenRepo with success', async () => {
    const res = jest.spyOn(tokenRepository, 'create')

    await dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password'
    })

    expect(res).toHaveBeenCalledWith({
      token: 'TOKEN_GENERATED',
      user_id: 1
    })
  })

  it('throw an Error if tokenRepository create throws', async () => {
    jest.spyOn(tokenRepository, 'create').mockRejectedValue(new Error())

    const promise =  dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password'
    })

    await expect(promise).rejects.toThrow()

  })

  it('throw an Error if userRepository loadByEmail throws', async () => {
    jest.spyOn(userRepository, 'create').mockRejectedValue(new Error())

    const promise =  dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password'
    })

    await expect(promise).rejects.toThrow()

  })

  it('throw an Error if userRepository loadByEmail throws', async () => {
    jest.spyOn(userRepository, 'findEmail').mockRejectedValue(new Error())

    const promise =  dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password'
    })

    await expect(promise).rejects.toThrow()

  })
});
