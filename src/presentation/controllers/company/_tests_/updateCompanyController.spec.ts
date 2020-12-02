import { IController, IHttpRequest } from '@/presentation/protocols'
import { IUpdateCompany } from '@/domain/usecases/company/updateCompany.interface'
import { UpdateCompanyController } from '../updateCompany.controller'
import { DbUpdateCompanyStub } from '@/presentation/mocks/company.mock'

let updateUserController: IController
let dbUpdateCompany: IUpdateCompany

describe('UpdateCompany Controller', () => {
  beforeEach(() => {
    dbUpdateCompany = new DbUpdateCompanyStub()
    updateUserController = new UpdateCompanyController(dbUpdateCompany)
  })

  it('should be defined', () => {
    expect(updateUserController).toBeDefined()
  })

  it('return status 200 if dbUpdateCompany return true', async () => {
    const req: IHttpRequest = {
      params: { id: 1 },
      body: {
        cnpj: '1111111111',
        name: 'company'
      }
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Empresa atualizada com sucesso!' }
    })
  })

  it('should be returns status 400 if dbUpdateCompany returns an error', async () => {
    jest
      .spyOn(dbUpdateCompany, 'update')
      .mockResolvedValue({ error: 'Você não cadastrou sua empresa ainda.' })

    const req: IHttpRequest = {
      params: { id: 1 },
      body: {
        cnpj: '1111111111',
        name: 'company'
      }
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Você não cadastrou sua empresa ainda.' }
    })
  })

  it('return status 500 if dbUpdateCompany throws', async () => {
    jest.spyOn(dbUpdateCompany, 'update').mockRejectedValue(new Error())

    const req: IHttpRequest = {
      params: { id: 1 },
      body: {
        cnpj: '1111111111',
        name: 'company'
      }
    }

    const res = await updateUserController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
