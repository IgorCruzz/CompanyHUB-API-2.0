import { BcryptAdapterStub } from '@/data/mocks/bcrypt.mock'
import { CryptoAdapterStub } from '@/data/mocks/crypto.mock'
import { TokenRepositoryStub } from '@/data/mocks/token.mock'
import {
  UserFindByEmailRepositoryStub,
  UserRepositoryStub,
} from '@/data/mocks/user.mock'
import {
  ICreateTokenRepository,
  ICreateUserRepository,
  IFindUserByEmailRepository,
  IGenerateCrypto,
  IHasher,
} from '@/data/protocols'
import { DbAddUser } from '../dbAddUser.data'

let dbAddUser: DbAddUser
let cryptoAdapter: IGenerateCrypto
let userFindByEmailRepository: IFindUserByEmailRepository
let userCreateRepository: ICreateUserRepository
let tokenRepository: ICreateTokenRepository
let bcryptAdapter: IHasher

describe('DbAddUser  Data', () => {
  beforeEach(() => {
    cryptoAdapter = new CryptoAdapterStub()
    userFindByEmailRepository = new UserFindByEmailRepositoryStub()
    userCreateRepository = new UserRepositoryStub()
    tokenRepository = new TokenRepositoryStub()
    bcryptAdapter = new BcryptAdapterStub()
    dbAddUser = new DbAddUser(
      cryptoAdapter,
      userFindByEmailRepository,
      userCreateRepository,
      tokenRepository,
      bcryptAdapter
    )
  })

  it('should be defined', () => {
    expect(dbAddUser).toBeDefined()
  })

  it('should be able to call UserRepository with success', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockResolvedValue(undefined)

    const res = jest.spyOn(userCreateRepository, 'create')

    await dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password',
    })

    expect(res).toHaveBeenCalledWith({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'hashed_password',
    })
  })

  it('returns null if already has a user with email passed on request', async () => {
    const res = await dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password',
    })

    expect(res).toEqual({ error: 'Já existe um usuário com este e-mail.' })
  })

  it('should be generate a token', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockResolvedValue(undefined)

    const res = cryptoAdapter.generate(16)

    expect(res).toBe('TOKEN_GENERATED')
  })

  it('should be able to call createTokenRepo with success', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockResolvedValue(undefined)

    const res = jest.spyOn(tokenRepository, 'create')

    await dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password',
    })

    expect(res).toHaveBeenCalledWith({
      token: 'TOKEN_GENERATED',
      user_id: 1,
    })
  })

  it('throw an Error if tokenRepository create throws', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockResolvedValue(undefined)

    jest.spyOn(tokenRepository, 'create').mockRejectedValue(new Error())

    const promise = dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password',
    })

    await expect(promise).rejects.toThrow()
  })

  it('throw an Error if userRepository loadByEmail throws', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockResolvedValue(undefined)

    jest.spyOn(userCreateRepository, 'create').mockRejectedValue(new Error())

    const promise = dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password',
    })

    await expect(promise).rejects.toThrow()
  })

  it('throw an Error if userRepository loadByEmail throws', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockRejectedValue(new Error())

    const promise = dbAddUser.add({
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'password',
    })

    await expect(promise).rejects.toThrow()
  })
})
