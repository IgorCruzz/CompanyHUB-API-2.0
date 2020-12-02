import { IDbFindAllServices } from '@/domain/usecases/service/findAllService.interface'
import { DbFindAllServicesStub } from '@/presentation/mocks/service.mock'
import { IController } from '@/presentation/protocols'
import { FindAllServicesController } from '../findAllServices.controller'
import MockDate from 'mockdate'

let dbFindAllServices: IDbFindAllServices
let findAllServicesController: IController

describe('findAllServices Controller', () => {
  beforeEach(() => {
    dbFindAllServices = new DbFindAllServicesStub()
    findAllServicesController = new FindAllServicesController(dbFindAllServices)
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should be defined', () => {
    expect(findAllServicesController).toBeDefined()
  })

  it('should return statusCode 200 if dbFindAllServices returns a Product', async () => {
    const res = await findAllServicesController.handle({})

    expect(res).toEqual({
      statusCode: 200,
      body: [{
        id: 1,
        name: 'service',
        description: 'description',
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'service',
        description: 'description',
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
      ]
    })
  })

  it('throw error 500 if addService throws', async () => {
    jest.spyOn(dbFindAllServices, 'findAll').mockRejectedValue(new Error())

    const res = await findAllServicesController.handle({})

    expect(res).toEqual({
      statusCode: 500,
      body: new Error()
    })
  })
})
