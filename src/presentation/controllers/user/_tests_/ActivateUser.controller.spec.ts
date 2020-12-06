import { IActivateUserAccount } from '@/domain/usecases/user/activateUserAccount.interface'
import { DbActivateUserAccountStub } from '@/presentation/mocks/user.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { ActivateUserAccountController } from '../activateUserAccount.controller'

let activateUserAccountController: IController
let activateUserAccount: IActivateUserAccount

describe('ActivateUserAccount Controller', () => {
  beforeEach(() => {
    activateUserAccount = new DbActivateUserAccountStub()
    activateUserAccountController = new ActivateUserAccountController(
      activateUserAccount
    )
  })

  it('should be defined', () => {
    expect(activateUserAccountController).toBeDefined()
  })

  it('return status 200 if UpdateUser passed on success', async () => {
    const req: IHttpRequest = {
      params: { token: 'token' },
    }

    const res = await activateUserAccountController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Conta ativada com sucesso!' },
    })
  })

  it('return status 400 if activateUserAccount returns null', async () => {
    jest
      .spyOn(activateUserAccount, 'activate')
      .mockResolvedValue({ error: 'Token Invalído' })

    const req: IHttpRequest = {
      params: { token: 'token' },
    }

    const res = await activateUserAccountController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Token Invalído' },
    })
  })

  it('return status 500 if activateUserAccount throws', async () => {
    const req: IHttpRequest = {
      params: { token: 'token' },
    }
    jest.spyOn(activateUserAccount, 'activate').mockRejectedValue(new Error())

    const promise = await activateUserAccountController.handle(req)

    expect(promise).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
