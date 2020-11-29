
import { IDbDeleteCompany } from '@/domain/usecases/company/deleteCompany.interface'
import { DbAddCompanyStub, DbDeleteCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteCompanyController } from './deleteCompany.controller'

let deleteCompanyController: IController
let deleteCompany: IDbDeleteCompany

describe('DeleteCompany Controller', () => {
  beforeEach(() => {
    deleteCompany = new DbDeleteCompanyStub()
    deleteCompanyController = new DeleteCompanyController(deleteCompany)
  })

  it('should be defined', () => {
    expect(deleteCompanyController).toBeDefined()
  })

  it('return statusCode 200 if deleteCompany returns true', async () => {
    const req: IHttpRequest = {
      params: {
        id: 1
      },
      userId: '1'
    }

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: { message: 'Empresa deletada com sucesso!.' }
    })
  })

  it('return statusCode 400 if deleteCompany returns an error', async () => {
    jest.spyOn(deleteCompany, 'delete').mockResolvedValue({ error: 'Não existe uma empresa com este ID.' })

    const req: IHttpRequest = {
      params: {
        id: 1
      },
      userId: '1'
    }

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 400,
      body: { message: 'Não existe uma empresa com este ID.' }
    })
  })
})
