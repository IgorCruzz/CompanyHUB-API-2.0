import { BcryptCompareStub } from '@/data/mocks/bcrypt.mock'
import { JwtSignAdapterStub } from '@/data/mocks/jwt.mock'
import { UserFindByEmailRepositoryStub } from '@/data/mocks/user.mock'
import { IFindUserByEmailRepository } from '@/data/protocols'
import { ICompare } from '@/data/protocols/bcryptAdapter/ICompare.interface'
import { ISign } from '@/data/protocols/jwtAdapter/signJwt.interface'
import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
import { DbSignIn } from '../dbSignIn.data'

let signInData: ISignIn
let jwtSignAdapter: ISign
let userFindByEmailRepository: IFindUserByEmailRepository
let bcryptCompare: ICompare

describe('SigIn Data', () => {
  beforeEach(() => {
    jwtSignAdapter = new JwtSignAdapterStub()
    userFindByEmailRepository = new UserFindByEmailRepositoryStub()
    bcryptCompare = new BcryptCompareStub()
    signInData = new DbSignIn(
      jwtSignAdapter,
      userFindByEmailRepository,
      bcryptCompare
    )
  })

  it('should be defined', () => {
    expect(signInData).toBeDefined()
  })

  it('should be able to signin', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: true,
      activation: true,
      created_at: new Date(),
      updated_at: new Date(),
    })

    const res = await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })

    expect(res).toEqual({
      id: 1,
      name: 'user',
      administrator: true,
      email: 'user@mail.com',
      token: 'token',
    })
  })

  it('should be able to call Sign with success', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: true,
      created_at: new Date(),
      updated_at: new Date(),
    })

    const res = jest.spyOn(jwtSignAdapter, 'sign')

    await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should be able to call findUserByEmail with success', async () => {
    const res = jest.spyOn(userFindByEmailRepository, 'findEmail')

    await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })
    expect(res).toHaveBeenCalledWith('user@mail.com')
  })

  it('return null with findUserByEmail returns undefined', async () => {
    jest
      .spyOn(userFindByEmailRepository, 'findEmail')
      .mockResolvedValue(undefined)

    const res = await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })

    expect(res).toEqual({ error: 'Não existe um usuário com este email.' })
  })

  it('should be able to call mockCompare with success', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date(),
    })

    const res = jest.spyOn(bcryptCompare, 'compare')

    await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })

    expect(res).toHaveBeenCalledWith('password', 'hashed_password')
  })

  it('return null if mockCompare returns false', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date(),
    })

    jest.spyOn(bcryptCompare, 'compare').mockResolvedValue(false)

    const res = await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })

    expect(res).toEqual({ error: 'A senha está incorreta.' })
  })

  it('return null if user activation is false', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date(),
    })

    const res = await signInData.signIn({
      email: 'user@mail.com',
      password: 'password',
    })

    expect(res).toEqual({ error: 'Por favor, ative a sua conta.' })
  })
})
