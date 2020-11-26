import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import { IController } from '@/presentation/protocols'
import { mockUpdateUser } from '@/presentation/__mocks__/user.mock'
import { UpdateUserController } from './updateUser.controller'

let updateUserController: IController
let updateUserData: IUpdateUser

describe('UpdateUser Controller', () => {
  beforeEach(() => {
    updateUserData = mockUpdateUser()
    updateUserController = new UpdateUserController()
  })

  it('should be defined', () => {
    expect(updateUserController).toBeDefined()
  })
})
