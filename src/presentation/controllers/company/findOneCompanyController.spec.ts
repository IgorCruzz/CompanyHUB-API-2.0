import { IDbFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import { DbFindOneCompanyCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { FindOneCompanyController } from './findOneCompany.controller'

let findOneCompanyController: IController
let dbFindOneCompany: IDbFindOneCompany

describe('FindOneCompany Controller', () => {
  beforeEach(() => {
    dbFindOneCompany = new DbFindOneCompanyCompanyStub()
    findOneCompanyController = new FindOneCompanyController(dbFindOneCompany)
  })

  it('should be defined', () => {
    expect(findOneCompanyController).toBeDefined()
  })

  it('return statusCode 200 if dbFindOneCompany return true', async () => {
    const req: IHttpRequest = { userId: '1' }

    const res = await findOneCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body:
        {
          user_id: 1,
          cnpj: '11111111111',
          id: 1,
          productConnection: [],
          name: 'company'
        }
    })
  })
})
