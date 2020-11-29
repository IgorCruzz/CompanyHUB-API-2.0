import { IDbFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import { DbFindOneCompanyCompanyStub } from '@/presentation/mocks/company.mock'
import { IController } from '@/presentation/protocols'
import { FindOneCompanyController } from './findOneCompany.controller'

let findOneCompanyController: IController
let DbFindOneCompany: IDbFindOneCompany

describe('FindOneCompany Controller', () => {
  beforeEach(() => {
    DbFindOneCompany = new DbFindOneCompanyCompanyStub()
    findOneCompanyController = new FindOneCompanyController()
  })

  it('should be defined', () => {
    expect(findOneCompanyController).toBeDefined()
  })
})
