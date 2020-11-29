import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'
import { mockAuthorization } from '../../mocks/authorization.mock'
import { IHttpRequest, IMiddleware } from '../../protocols'
import { AuthMiddleware } from '../auth.middleware'

let authData: IAuthorization
let authController: IMiddleware

describe('Auth Middleware', () => {
  beforeEach(() => {
    authData = mockAuthorization()
    authController = new AuthMiddleware(authData, false)
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
      },
      params: {
        id: 1
      }
    }

    await authController.handle(req)

    expect(res).toHaveBeenCalledWith({ token: 'token', role: false, params: { id: 1 } })
  })

  it('should  return statusCode 401 if User try to update an data from another user', async () => {
    jest.spyOn(authData, 'auth').mockResolvedValue({ error: 'Você não tem permissão para fazer isto.' })

    const req: IHttpRequest = {
      headers: {
        authorization: 'Bearer token'
      },
      params: {
        id: 2
      }
    }

    const res = await authController.handle(req)

    expect(res).toEqual({
      statusCode: 401,
      body: { message: 'Você não tem permissão para fazer isto.' }
    })
  })

  it('should return statusCode 500 if authData throws', async () => {
    jest.spyOn(authData, 'auth').mockRejectedValue(new Error())

    const req: IHttpRequest = {
      headers: {
        authorization: 'Bearer token'
      },
      params: { id: 1 }
    }

    const res = await authController.handle(req)

    expect(res).toEqual({
      statusCode: 500,
      body: new Error()
    })
  })
})
