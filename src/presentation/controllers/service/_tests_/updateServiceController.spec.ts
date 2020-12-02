import { IUpdateService } from '@/domain/usecases/service/updateService.interface'
import { DbUpdateServiceStub } from '@/presentation/mocks/service.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { UpdateServiceController } from '../updateService.controller'

let dbUpdateService: IUpdateService
let updatedServiceController: IController

describe('UpdateService Controller', () => {
  beforeEach(() => {
    dbUpdateService = new DbUpdateServiceStub()
    updatedServiceController = new UpdateServiceController(dbUpdateService)
  })

  it('should be defined', () => {
    expect(updatedServiceController).toBeDefined()
  })

  it('should return status 200 if dbUpdateService returns a service updated', async () => {
    const req: IHttpRequest = {
      userId: '1',
      params: { id: 1 },
      body: {
        name: 'service',
        description: 'description',
        product_id: 1
      }
    }

    const res = await updatedServiceController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Serviço atualizado com sucesso!' }
    })
  })

  it('should be returns status 401 if dbUpdateService returns an error', async () => {
    jest
      .spyOn(dbUpdateService, 'update')
      .mockResolvedValue({ error: 'Você não tem permissão para atualizar este serviço.' })

    const req: IHttpRequest = {
      userId: '1',
      params: { id: 1 },
      body: {
        name: 'service',
        description: 'description',
        product_id: 1
      }
    }

    const res = await updatedServiceController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Você não tem permissão para atualizar este serviço.' }
    })
  })

  it('return status 500 if dbUpdateService throws', async () => {
    const req: IHttpRequest = {
      userId: '1',
      params: { id: 1 },
      body: {
        name: 'service',
        description: 'description',
        product_id: 1
      }
    }

    jest.spyOn(dbUpdateService, 'update').mockRejectedValue(new Error())

    const res = await updatedServiceController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
