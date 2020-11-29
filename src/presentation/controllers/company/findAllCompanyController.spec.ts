
import { IDbFindAllCompany } from '@/domain/usecases/company/findAllCompanies.interface'
import { DbFindAllCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { FindAllCompanyController } from './findAllCompany.controller'

let findAllCompanyController: IController
let DbFindAllCompany: IDbFindAllCompany

describe('DeleteCompany Controller', () => {
  beforeEach(() => {
    DbFindAllCompany = new DbFindAllCompanyStub()
    findAllCompanyController = new FindAllCompanyController()
  })

  it('should be defined', () => {
    expect(findAllCompanyController).toBeDefined()
  })
})
