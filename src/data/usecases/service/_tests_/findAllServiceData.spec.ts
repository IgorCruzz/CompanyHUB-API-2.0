import { FindAllservicesRepositoryStub } from '@/data/mocks/service.mock'
import { IFindAllservicesRepository } from '@/data/protocols/db/service/findAllServicesRepository.interface'
import { IFindAllServices } from '@/domain/usecases/service/findAllService.interface'
import MockDate from 'mockdate'
import { DbFindAllServices } from '../dbFindAllService.data'

let findAllServices: IFindAllServices
let findAllServicesRepository: IFindAllservicesRepository

describe('DbFindAllService Data', () => {
  beforeEach(() => {
    findAllServicesRepository = new FindAllservicesRepositoryStub()
    findAllServices = new DbFindAllServices(findAllServicesRepository)
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should be defined', () => {
    expect(findAllServices).toBeDefined()
  })

  it('should call findAllservicesRepository with success', async () => {
    const res = jest.spyOn(findAllServicesRepository, 'findAll')

    await findAllServices.findAll()

    expect(res).toHaveBeenCalled()
  })

  it('should returns a Services array', async () => {
    const res = await findAllServices.findAll()

    expect(res).toEqual([
      {
        id: 1,
        name: 'service',
        description: 'description',
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'service',
        description: 'description',
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  })
})
