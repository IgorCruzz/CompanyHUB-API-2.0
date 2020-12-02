import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
import { DbSignInStub } from '@/presentation/mocks/signIn.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { SignInController } from '../signIn.controller'

let signInController: IController
let dbSignInData: ISignIn

describe('SignIn Controller', () => {
  beforeEach(() => {
    dbSignInData = new DbSignInStub()
    signInController = new SignInController(dbSignInData)
  })

  it('should be defined', () => {
    expect(signInController).toBeDefined()
  })

  it('should be call dbSignInData with correct values', async () => {
    const res = jest.spyOn(dbSignInData, 'signIn')

    const req: IHttpRequest = {
      body: {
        email: 'user@mail.com',
        password: 'password'
      }
    }

    await signInController.handle(req)

    expect(res).toHaveBeenCalledWith({
      email: 'user@mail.com',
      password: 'password'
    })
  })

  it('should be returns status 200 if call DbSignIn with success', async () => {
    const req: IHttpRequest = {
      body: {
        email: 'user@mail.com',
        password: 'password'
      }
    }

    const res = await signInController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: {
        id: 1,
        name: 'name',
        email: 'user@mail.com',
        token: 'token'
      }
    })
  })

  it('should be returns status 401 with user is not authorized to signin', async () => {
    jest
      .spyOn(dbSignInData, 'signIn')
      .mockResolvedValue({ error: 'Por favor, ative a sua conta.' })

    const req: IHttpRequest = {
      body: {
        email: 'user@mail.com',
        password: 'password'
      }
    }

    const res = await signInController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Por favor, ative a sua conta.' }
    })
  })

  it('should be returns status 500 if DbSignIn throws', async () => {
    jest.spyOn(dbSignInData, 'signIn').mockRejectedValue(new Error())

    const req: IHttpRequest = {
      body: {
        email: 'user@mail.com',
        password: 'password'
      }
    }

    const res = await signInController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
