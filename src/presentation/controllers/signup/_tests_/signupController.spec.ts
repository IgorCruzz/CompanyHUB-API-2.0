import { IAddUser } from '@/domain/usecases/user/addUser.interface'
import { DbAddUserStub } from '@/presentation/mocks/user.mock'
import { IHttpRequest } from '@/presentation/protocols'
import { SignupController } from '../signup.controller'

let signupController: SignupController
let dbAddUser: IAddUser

describe('SignupController', () => {
  beforeEach(() => {
    dbAddUser = new DbAddUserStub()
    signupController = new SignupController(dbAddUser)
  })
  it('should be defined', () => {
    expect(signupController).toBeDefined()
  })

  it('returns with status 200 with everthing has OK', async () => {
    const req: IHttpRequest = {
      body: {
        name: 'name',
        email: 'user@mail.com',
        password: 'password',
        confirmPassword: 'password',
      },
    }

    const res = await signupController.handle(req)

    expect(res).toEqual({
      status: 201,
      body: {
        id: 1,
        name: 'name',
        email: 'user@mail.com',
      },
    })
  })

  it('should call AddUser with correct values', async () => {
    const req: IHttpRequest = {
      body: {
        name: 'name',
        email: 'user@mail.com',
        password: 'password',
        confirmPassword: 'password',
      },
    }

    const res = jest.spyOn(dbAddUser, 'add')

    await signupController.handle(req)

    expect(res).toHaveBeenCalledWith({
      name: 'name',
      email: 'user@mail.com',
      password_hash: 'password',
    })
  })

  it('throw error 401 with has an user with email passed on request', async () => {
    const req: IHttpRequest = {
      body: {
        name: 'name',
        email: 'user@mail.com',
        password: 'password',
        confirmPassword: 'password',
      },
    }

    jest
      .spyOn(dbAddUser, 'add')
      .mockResolvedValue({ error: 'Já existe um usuário com este e-mail.' })

    const res = await signupController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: {
        message: 'Já existe um usuário com este e-mail.',
      },
    })
  })

  it('throw error 500 if AddUser throws', async () => {
    const req: IHttpRequest = {
      body: {
        name: 'name',
        email: 'user@mail.com',
        password: 'password',
        confirmPassword: 'password',
      },
    }

    jest.spyOn(dbAddUser, 'add').mockRejectedValue(new Error())

    const res = await signupController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
