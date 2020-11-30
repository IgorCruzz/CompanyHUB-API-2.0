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

  it('return statusCode 200 if UpdateUser passed on success', async () => {
    const req: IHttpRequest = {
      params: { id: 1 },
      body: {
        name: 'name'
      }
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: { message: 'Atualizado com sucesso.' }
    })
  })

  it('return statusCode 400 if UpdateUser returns null', async () => {
    jest
      .spyOn(updateUserData, 'update')
      .mockResolvedValue({ error: 'Não existe um usuário com este ID.' })

    const req: IHttpRequest = {
      params: { id: 1 },
      body: {
        name: 'name'
      }
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      statusCode: 400,
      body: { message: 'Não existe um usuário com este ID.' }
    })
  })

  it('return statusCode 500 if UpdateUser throws', async () => {
    const req: IHttpRequest = {
      params: { id: 1 },
      body: {
        name: 'name'
      }
    }
    jest.spyOn(updateUserData, 'update').mockRejectedValue(new Error())

    const promise = await updateUserController.handle(req)

    expect(promise).toEqual({
      statusCode: 500,
      body: new Error()
    })
  })
})
