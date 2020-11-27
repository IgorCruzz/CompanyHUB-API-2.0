import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'
import { mockAuthorization } from '../mocks/authorization.mock'
import { IHttpRequest, IMiddleware } from '../protocols'
import { AuthMiddleware } from './auth.middleware'

let authData: IAuthorization
let authController: IMiddleware

describe('Auth Middleware', () => {
  beforeEach(() => {
    authData = mockAuthorization()
    authController = new AuthMiddleware(authData)
  })

  it('should be defined', () => {
    expect(authController).toBeDefined()
  })

  it('should be return 401 if token has no provided', async () => {
    const req: IHttpRequest = {
      headers: {
        authorization: ''
      }
    }

    const res = await authController.handle(req)

    expect(res).toEqual({
      statusCode: 401,
      body: { message: 'Insira o token.' }
    })
  })

  it('should be to call authData with success', async () => {
    const res = jest.spyOn(authData, 'auth')

    const req: IHttpRequest = {
      headers: {
        authorization: 'Bearer token'
      }
    }

    await authController.handle(req)

    expect(res).toHaveBeenCalledWith('token')
  })
})
