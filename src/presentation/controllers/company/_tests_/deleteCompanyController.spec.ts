import { IDeleteCompany } from '@/domain/usecases/company/deleteCompany.interface'
import { DbDeleteCompanyStub } from '@/presentation/mocks/company.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteCompanyController } from '../deleteCompany.controller'

let deleteCompanyController: IController
let deleteCompany: IDeleteCompany

describe('DeleteCompany Controller', () => {
  beforeEach(() => {
    deleteCompany = new DbDeleteCompanyStub()
    deleteCompanyController = new DeleteCompanyController(deleteCompany)
  })

  it('should be defined', () => {
    expect(deleteCompanyController).toBeDefined()
  })

  it('return status 200 if deleteCompany returns true', async () => {
    const req: IHttpRequest = {
      params: {
        deleteId: 1,
      },
      userId: '1',
    }

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Empresa deletada com sucesso!.' },
    })
  })

  it('return status 400 if deleteCompany returns an error', async () => {
    jest
      .spyOn(deleteCompany, 'delete')
      .mockResolvedValue({ error: 'Não existe uma empresa com este ID.' })

    const req: IHttpRequest = {
      params: {
        deleteId: 1,
      },
      userId: '1',
    }

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Não existe uma empresa com este ID.' },
    })
  })

  it('return status 500 if deleteCompany throws', async () => {
    const req: IHttpRequest = {
      params: {
        deleteId: 1,
      },
      userId: '1',
    }

    jest.spyOn(deleteCompany, 'delete').mockRejectedValue(new Error())

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
