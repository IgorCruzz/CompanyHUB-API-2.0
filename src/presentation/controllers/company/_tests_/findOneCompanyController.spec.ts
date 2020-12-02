import { IDbFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import { DbFindOneCompanyCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { FindOneCompanyController } from '../findOneCompany.controller'

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

  it('return status 200 if dbFindOneCompany return true', async () => {
    const req: IHttpRequest = { params: { id: 1 } }

    const res = await findOneCompanyController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company'
      }
    })
  })

  it('should be returns status 400 if dbFindOneCompany returns an error', async () => {
    jest
      .spyOn(dbFindOneCompany, 'findOne')
      .mockResolvedValue({ error: 'Você não cadastrou sua empresa ainda.' })

    const req: IHttpRequest = { params: { id: 1 } }

    const res = await findOneCompanyController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Você não cadastrou sua empresa ainda.' }
    })
  })

  it('return status 500 if DbFindAllCompany throws', async () => {
    jest.spyOn(dbFindOneCompany, 'findOne').mockRejectedValue(new Error())

    const req: IHttpRequest = { params: { id: 1 } }

    const res = await findOneCompanyController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
