import { FindByUserRelationStub } from '@/data/mocks/company.mock'
import { FindByProductCompanyIdStub } from '@/data/mocks/product.mock'
import { UpdateServiceRepositoryStub } from '@/data/mocks/service.mock'
import { IFindByUserRelationRepository } from '@/data/protocols/db/company/findByUserRelationRepository.interface'
import { IFindByProductCompanyId } from '@/data/protocols/db/product/findByProductCompanyIdRepository.interface'
import { IUpdateServiceRepository } from '@/data/protocols/db/service/updateServiceRepository.interface'
import { IUpdateService } from '@/domain/usecases/service/updateService.interface'
import { DbUpdateService } from '../dbUpdateService.data'

let updateServiceRepository: IUpdateServiceRepository
let dbBUpdateService: IUpdateService
let findByUserRelation: IFindByUserRelationRepository
let findByProductCompanyId: IFindByProductCompanyId

describe('DbUpdateService Data', () => {
  beforeEach(() => {
    findByUserRelation = new FindByUserRelationStub()
    findByProductCompanyId = new FindByProductCompanyIdStub()
    updateServiceRepository = new UpdateServiceRepositoryStub()
    dbBUpdateService = new DbUpdateService(
      findByUserRelation,
      findByProductCompanyId,
      updateServiceRepository
    )
  })

  it('should be defined', () => {
    expect(dbBUpdateService).toBeDefined()
  })

  it('should call findByUserRelation with success', async () => {
    const res = jest.spyOn(findByUserRelation, 'findByUserRelation')

    await dbBUpdateService.update(1, '1', {
      name: 'service',
      description: 'description',
      product_id: 1,
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should call findByProductCompanyId with success', async () => {
    const res = jest.spyOn(findByProductCompanyId, 'findProductCompanyId')

    await dbBUpdateService.update(1, '1', {
      name: 'service',
      description: 'description',
      product_id: 1,
    })

    expect(res).toHaveBeenCalledWith({
      company_id: 1,
      product_id: 1,
    })
  })

  it('should return an error message if findByProductCompanyId return undefined', async () => {
    jest
      .spyOn(findByProductCompanyId, 'findProductCompanyId')
      .mockResolvedValue(undefined)

    const res = await dbBUpdateService.update(1, '1', {
      name: 'service',
      description: 'description',
      product_id: 1,
    })

    expect(res).toEqual({
      error: 'Você não tem permissão para atualizar este serviço.',
    })
  })

  it('should call updateServiceRepository with success', async () => {
    const res = jest.spyOn(updateServiceRepository, 'update')

    await dbBUpdateService.update(1, '1', {
      name: 'service',
      description: 'description',
      product_id: 1,
    })

    expect(res).toHaveBeenCalledWith(1, {
      name: 'service',
      description: 'description',
      product_id: 1,
    })
  })

  it('should return a service updated', async () => {
    const res = await dbBUpdateService.update(1, '1', {
      name: 'service',
      description: 'description',
      product_id: 1,
    })

    expect(res).toEqual({ updated: true })
  })
})
