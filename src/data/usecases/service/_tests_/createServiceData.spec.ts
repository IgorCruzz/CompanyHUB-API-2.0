import { FindUserIdRepositorytub } from "@/data/mocks/company.mock";
import { FindByProductCompanyIdStub } from "@/data/mocks/product.mock";
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { IAddService } from "@/domain/usecases/service/addService.interface";
import { AddService } from "../createService.data";


let addService: IAddService
let findUserIdRepository: IFindUserIdRepository
let findByProductCompanyId: IFindByProductCompanyId



describe('AddService Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositorytub()
    findByProductCompanyId = new FindByProductCompanyIdStub()
    addService = new AddService(findUserIdRepository, findByProductCompanyId)
  });

  it('should be defined', () => {
    expect(addService).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await addService.add({
      name: 'company',
      description: 'description',
      user: '1',
      product_id: 1
    })

    expect(res).toHaveBeenCalledWith(1)
  })


  it('should call findByProductCompanyId with success', async () => {
    const res = jest.spyOn(findByProductCompanyId, 'findProductCompanyId')

    await addService.add({
      name: 'company',
      description: 'description',
      user: '1',
      product_id: 1
    })

    expect(res).toHaveBeenCalledWith({
      company_id: 1,
      product_id: 1
    })
  })
})
