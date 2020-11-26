import { MockJwtSignAdapter } from "@/data/mocks/jwt.mock";
import { MockUserFindByEmailRepository } from "@/data/mocks/user.mock";
import { IFindUserByEmailRepository } from "@/data/protocols";
import { ISign } from "@/data/protocols/jwtAdapter/signJwt.interface";
import { ISignIn } from "@/domain/usecases/signin/signIn.interface"
import { DbSignIn } from "./signIn.data";

let signInData: ISignIn
let jwtSignAdapter: ISign
let userFindByEmailRepository: IFindUserByEmailRepository

describe('SigIn Data', () => {
  beforeEach(() => {
    jwtSignAdapter = MockJwtSignAdapter()
    userFindByEmailRepository = MockUserFindByEmailRepository()
    signInData = new DbSignIn(jwtSignAdapter, userFindByEmailRepository)
  })

  it('should be defined', () => {
    expect(signInData).toBeDefined()
  })

  it('should be able to signin', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'hashed_password'
    })

    const res = await signInData.signIn({
      email: 'user@mail.com',
      password: 'password'
    })

    expect(res).toEqual({
      id: 1,
      name: 'name',
      email: 'user@mail.com',
      token: 'token'
    })

  })

  it('should be able to call Sign with success', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      email: 'user@mail.com',
      name: 'name',
      password_hash: 'hashed_password'
    })

    const res = jest.spyOn(jwtSignAdapter, 'sign')

    await signInData.signIn({
      email: 'user@mail.com',
      password: 'password'
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should be able to call findUserByEmail with success', async () => {
    const res =  jest.spyOn(userFindByEmailRepository, 'findEmail')

    await signInData.signIn({
      email: 'user@mail.com',
      password: 'password'
    })
    expect(res).toHaveBeenCalledWith('user@mail.com')
  })

  it('return null with findUserByEmail returns undefined', async () => {
     const res =  await signInData.signIn({
      email: 'user@mail.com',
      password: 'password'
    })

    expect(res).toBeNull()
  })
});
