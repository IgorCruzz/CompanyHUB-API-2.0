import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import { DbUpdateUserStub } from '@/presentation/mocks/user.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { UpdateUserController } from '../updateUser.controller'

let updateUserController: IController
let updateUserData: IUpdateUser

describe('UpdateUser Controller', () => {
  beforeEach(() => {
    updateUserData = new DbUpdateUserStub()
    updateUserController = new UpdateUserController(updateUserData)
  })

  it('should be defined', () => {
    expect(updateUserController).toBeDefined()
  })

  it('return status 200 if UpdateUser passed on success', async () => {
    const req: IHttpRequest = {
      params: { updateId: 1 },
      body: {
        name: 'name',
      },
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Atualizado com sucesso.' },
    })
  })

  it('return status 400 if UpdateUser returns null', async () => {
    jest
      .spyOn(updateUserData, 'update')
      .mockResolvedValue({ error: 'Não existe um usuário com este ID.' })

    const req: IHttpRequest = {
      params: { updateId: 1 },
      body: {
        name: 'name',
      },
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Não existe um usuário com este ID.' },
    })
  })

  it('return status 500 if UpdateUser throws', async () => {
    const req: IHttpRequest = {
      params: { updateId: 1 },
      body: {
        name: 'name',
      },
    }
    jest.spyOn(updateUserData, 'update').mockRejectedValue(new Error())

    const promise = await updateUserController.handle(req)

    expect(promise).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
