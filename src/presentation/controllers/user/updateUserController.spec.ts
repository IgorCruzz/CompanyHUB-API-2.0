import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { mockUpdateUser } from '@/presentation/__mocks__/user.mock'
import { UpdateUserController } from './updateUser.controller'

let updateUserController: IController
let updateUserData: IUpdateUser

describe('UpdateUser Controller', () => {
  beforeEach(() => {
    updateUserData = mockUpdateUser()
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
})
