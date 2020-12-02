import { IAddService } from '@/domain/usecases/service/addService.interface'
import { DbAddServiceStub } from '@/presentation/mocks/service.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { CreateServiceController } from '../createService.controller'

let createServiceController: IController
let addService: IAddService

describe('CreateService Conroller', () => {
  beforeEach(() => {
    addService = new DbAddServiceStub()
    createServiceController = new CreateServiceController(addService)
  })

  it('should be defined', () => {
    expect(createServiceController).toBeDefined()
  })

  it('should return status 200 if addProduct returns a Product', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'service',
        description: 'description',
        product_id: 1
      }
    }

    const res = await createServiceController.handle(req)

    expect(res).toEqual({
      status: 201,
      body: {
        id: 1,
        name: 'service',
        description: 'description',
        product_id: 1
      }
    })
  })

  it('should be returns status 401 if addService returns an error', async () => {
    jest
      .spyOn(addService, 'add')
      .mockResolvedValue({ error: 'Você não tem permissão para cadastrar um serviço neste produto.' })

    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'service',
        description: 'description',
        product_id: 1
      }
    }

    const res = await createServiceController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Você não tem permissão para cadastrar um serviço neste produto.' }
    })
  })

  it('throw error 500 if addService throws', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'service',
        description: 'description',
        product_id: 1
      }
    }

    jest.spyOn(addService, 'add').mockRejectedValue(new Error())

    const res = await createServiceController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
