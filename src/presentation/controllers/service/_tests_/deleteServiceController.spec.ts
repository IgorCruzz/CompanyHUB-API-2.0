import { IDbDeleteService } from '@/domain/usecases/service/deleteService.interface'
import { DbDeleteServiceStub } from '@/presentation/mocks/service.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteServiceController } from '../deleteService.controller'

let dbDeleteService: IDbDeleteService
let deleteCompanyController: IController

describe('DeleteService Controller', () => {
  beforeEach(() => {
    dbDeleteService = new DbDeleteServiceStub()
    deleteCompanyController = new DeleteServiceController(dbDeleteService)
  })

  it('should be defined', () => {
    expect(deleteCompanyController).toBeDefined()
  })

  it('return statusCode 200 if dbDeleteService returns true', async () => {
    const req: IHttpRequest = {
      params: {
        id: 1
      },
      userId: '1',
      body: {
        product_id: 1
      }
    }

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: { message: 'Serviço deletado com sucesso!' }
    })
  })

  it('return statusCode 400 if dbDeleteService returns an error', async () => {
    jest
      .spyOn(dbDeleteService, 'delete')
      .mockResolvedValue({ error: 'Você não tem permissão para deletar este serviço.' })

    const req: IHttpRequest = {
      params: {
        id: 1
      },
      userId: '1',
      body: {
        product_id: 1
      }
    }

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 400,
      body: { message: 'Você não tem permissão para deletar este serviço.' }
    })
  })

  it('return statusCode 500 if dbDeleteService throws', async () => {
    const req: IHttpRequest = {
      params: {
        id: 1
      },
      userId: '1',
      body: {
        product_id: 1
      }
    }

    jest.spyOn(dbDeleteService, 'delete').mockRejectedValue(new Error())

    const res = await deleteCompanyController.handle(req)

    expect(res).toEqual({
      statusCode: 500,
      body: new Error()
    })
  })
})
