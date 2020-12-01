import { FindByUserRelationStub } from "@/data/mocks/company.mock";
import { FindByProductCompanyIdStub } from "@/data/mocks/product.mock";
import { DeleteServiceRepositoryStub } from "@/data/mocks/service.mock";
import { IFindByUserRelationRepository } from "@/data/protocols/db/company/findByUserRelationRepository";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { IDeleteServiceRepository } from "@/data/protocols/db/service/deleteServiceRepository";
import { IDbDeleteService } from "@/domain/usecases/service/deleteService.interface";
import { DbDeleteService } from "../deleteService.data";


let dbDeleteService: IDbDeleteService
let findByUserRelation: IFindByUserRelationRepository
let findByProductCompanyId: IFindByProductCompanyId
let deleteServiceRepository: IDeleteServiceRepository


describe('DbDeleteService Data', () => {
  beforeEach(() => {
    findByUserRelation = new FindByUserRelationStub()
    findByProductCompanyId = new FindByProductCompanyIdStub()
    deleteServiceRepository = new DeleteServiceRepositoryStub()
    dbDeleteService = new DbDeleteService(
      findByUserRelation,
      findByProductCompanyId,
      deleteServiceRepository)
  })

  it('should be defined', () => {
    expect(dbDeleteService).toBeDefined()
  })

  it('should call findByUserRelation with success', async () => {
    const res = jest.spyOn(findByUserRelation, 'findByUserRelation')

    await dbDeleteService.delete({
      id: 1,
      user: '1',
      product_id: 1
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should call findByProductCompanyId with success', async () => {
    const res = jest.spyOn(findByProductCompanyId, 'findProductCompanyId')

    await dbDeleteService.delete({
      id: 1,
      user: '1',
      product_id: 1
    })

    expect(res).toHaveBeenCalledWith({
      company_id: 1,
      product_id: 1
    })
  })

  it('should return an error message if findByProductCompanyId return undefined', async () => {
    jest.spyOn(findByProductCompanyId, 'findProductCompanyId').mockResolvedValue(undefined)


    const res = await dbDeleteService.delete({
      id: 1,
      user: '1',
      product_id: 1
    })

    expect(res).toEqual({
      error: 'Você não tem permissão para deletar este serviço.'
    })
  })

  it('should call deleteServiceRepository with success', async () => {
    const res = jest.spyOn(deleteServiceRepository, 'delete')

    await dbDeleteService.delete({
      id: 1,
      user: '1',
      product_id: 1
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should return an service deleted', async () => {
    const res = await dbDeleteService.delete({
      id: 1,
      user: '1',
      product_id: 1
    })

    expect(res).toEqual({ deleted: true })

  })

});
