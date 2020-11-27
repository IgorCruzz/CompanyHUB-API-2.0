import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'
import { mockAuthorization } from '../mocks/authorization.mock'
import { IHttpRequest, IMiddleware } from '../protocols'
import { AuthMiddleware } from './auth.middleware'

let authMiddleware: IAuthorization
let authController: IMiddleware

describe('Auth Middleware', () => {
  beforeEach(() => {
    authMiddleware = mockAuthorization()
    authController = new AuthMiddleware()
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
})
