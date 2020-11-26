import { IDeleteUser } from '@/domain/usecases/user/deleteUser.interface'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { mockDeleteUser } from '@/presentation/__mocks__/user.mock'
import { DeleteUserController } from './deleteUser.controller'

let deleteUserController: IController
let deleteUserData: IDeleteUser

describe('DeleteUser Controller', () => {
  beforeEach(() => {
    deleteUserData = mockDeleteUser()
    deleteUserController = new DeleteUserController(deleteUserData)
  })

  it('should be defined', () => {
    expect(deleteUserController).toBeDefined()
  })

  it('should be able to call DbDeleteUser with success', async () => {
    const req: IHttpRequest = {
      params: {
        id: 1
      }
    }

    const res = jest.spyOn(deleteUserData, 'delete')

    await deleteUserController.handle(req)

    expect(res).toHaveBeenCalledWith(req.params.id)
  })

  it('return status 200 if deleteUser returns true', async () => {
    const req: IHttpRequest = {
      params: {
        id: 1
      }
    }

    const res = await deleteUserController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: { message: 'Usuário deletado com sucesso.' }
    })
  })

  it('throw an error 400 if id passed on params doesnt belongs to a user registered', async () => {
    jest.spyOn(deleteUserData, 'delete').mockResolvedValue(null)

    const req: IHttpRequest = {
      params: {
        id: 1
      }
    }

    const res = await deleteUserController.handle(req)

    expect(res).toEqual({
      statusCode: 400,
      body: { message: 'Não existe um usuário com este ID' }
    })
  })

  it('throw error 500 if AddUser throws', async () => {
    const req: IHttpRequest = {
      params: {
        id: 1
      }
    }

    jest.spyOn(deleteUserData, 'delete').mockRejectedValue(new Error())

    const res = await deleteUserController.handle(req)

    expect(res).toEqual({
      statusCode: 500,
      body: new Error()
    })
  })
})
