import { IAddCompany } from '@/domain/usecases/company/addCompany.interface'
import { DbAddCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteCompanyController } from './deleteCompany.controller'

let deleteCompanyController: IController
let deleteCompany: IAddCompany

describe('DeleteCompany Controller', () => {
  beforeEach(() => {
    deleteCompany = new DbAddCompanyStub()
    deleteCompanyController = new DeleteCompanyController()
  })

  it('should be defined', () => {
    expect(deleteCompanyController).toBeDefined()
  })
})
