import { IAddCompany } from '@/domain/usecases/company/addCompany.interface'
import { DbAddCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { CreateCompanyController } from './createCompany.controller'

let createCompanyController: IController
let addCompany: IAddCompany

describe('CreateCompany Conroller', () => {
  beforeEach(() => {
    addCompany = new DbAddCompanyStub()
    createCompanyController = new CreateCompanyController(addCompany)
  })

  it('should be defined', () => {
    expect(createCompanyController).toBeDefined()
  })

  it('should return statusCode 200 if DbAddCompany returns a Company', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'company',
        cnpj: '1111111111'
      }
    }

    const res = await createCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: {
        id: 1,
        user_id: 1,
        name: 'company',
        cnpj: '1111111111'
      }
    })
  })
})
