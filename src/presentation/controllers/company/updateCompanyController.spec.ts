import { IController, IHttpRequest } from '@/presentation/protocols'
import { mockUpdateUser } from '@/presentation/mocks/user.mock'
import { IUpdateCompany } from '@/domain/usecases/company/updateCompany.interace'
import { UpdateCompanyController } from './updateCompany.controller'

let updateUserController: IController
let dbUpdateCompany: IUpdateCompany

describe('UpdateCompany Controller', () => {
  beforeEach(() => {
    dbUpdateCompany = mockUpdateUser()
    updateUserController = new UpdateCompanyController()
  })

  it('should be defined', () => {
    expect(updateUserController).toBeDefined()
  })
})
