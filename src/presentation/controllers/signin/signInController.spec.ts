import { ISignIn } from '@/domain/usecases/signin/signIn.interface'
import { mockDbSignIn } from '@/presentation/mocks/signIn.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { SignInController } from './signIn.controller'

let signInController: IController
let dbSignInData: ISignIn

describe('SignIn Controller', () => {
  beforeEach(() => {
    dbSignInData = mockDbSignIn()
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

  it('should be returns statusCode 200 if call mockDbSignIn with success', async () => {
    const req: IHttpRequest = {
      body: {
        email: 'user@mail.com',
        password: 'password'
      }
    }

    const res = await signInController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: {
        id: 1,
        name: 'name',
        email: 'user@mail.com',
        token: 'token'
      }
    })
  })
})
