import { IDeleteUser } from '@/domain/usecases/user/deleteUser.interface'
import { DbDeleteUserStub } from '@/presentation/mocks/user.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteUserController } from '../deleteUser.controller'

let deleteUserController: IController
let deleteUserData: IDeleteUser

describe('DeleteUser Controller', () => {
  beforeEach(() => {
    deleteUserData = new DbDeleteUserStub()
    deleteUserController = new DeleteUserController(deleteUserData)
  })

  it('should be defined', () => {
    expect(deleteUserController).toBeDefined()
  })

  it('return status 200 if deleteUser returns true', async () => {
    const req: IHttpRequest = {
      params: {
        deleteId: 1,
      },
    }

    const res = await deleteUserController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Usuário deletado com sucesso.' },
    })
  })

  it('throw an error 400 if id passed on params doesnt belongs to a user registered', async () => {
    jest
      .spyOn(deleteUserData, 'delete')
      .mockResolvedValue({ error: 'Não existe um usuário com este ID' })

    const req: IHttpRequest = {
      params: {
        deleteId: 1,
      },
    }

    const res = await deleteUserController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Não existe um usuário com este ID' },
    })
  })

  it('throw error 500 if AddUser throws', async () => {
    const req: IHttpRequest = {
      params: {
        deleteId: 1,
      },
    }

    jest.spyOn(deleteUserData, 'delete').mockRejectedValue(new Error())

    const res = await deleteUserController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
