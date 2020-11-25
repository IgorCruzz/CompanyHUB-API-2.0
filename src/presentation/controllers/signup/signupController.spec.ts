import { IAddUserDTO } from '@/data/protocols'
import { IUser } from '@/domain/models/user.interface'
import { IAddUser } from '@/domain/usecases/user/addUser.interface'
import { IHttpRequest } from '@/presentation/protocols'
import { SignupController } from './signup.controller'

let signupController: SignupController
let dbAddUser: DbAddUserStub

class DbAddUserStub implements IAddUser {
  async add (data: IAddUserDTO): Promise<IUser | null> {
    return Promise.resolve({
      id: 1,
      name: 'name',
      email: 'user@mail.com'

    })
  }
}

describe('SignupController', () => {
  beforeEach(() => {
    dbAddUser = new DbAddUserStub()
    signupController = new SignupController(dbAddUser)
  })
  it('should be defined', () => {
    expect(signupController).toBeDefined()
  })

  it('returns with statusCode 200 with everthing has OK', async () => {
    const req: IHttpRequest = {
      body: {
        name: 'name',
        email: 'user@mail.com',
        password: 'password',
        confirmPassword: 'password'
      }
    }

    const res = await signupController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: {
        id: 1,
        name: 'name',
        email: 'user@mail.com'
      }
    })
  })

  it('should call AddUser with correct values', async () => {
    const req: IHttpRequest = {
      body: {
        name: 'name',
        email: 'user@mail.com',
        password: 'password',
        confirmPassword: 'password'
      }
    }

    const res = jest.spyOn(dbAddUser, 'add')

    await signupController.handle(req)

    expect(res).toHaveBeenCalledWith({
      name: 'name',
      email: 'user@mail.com',
      password_hash: 'password'
    })
  })
})
