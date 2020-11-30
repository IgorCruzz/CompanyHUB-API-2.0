import { FindUserIdRepositorytub } from "@/data/mocks/company.mock"
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface"
import { IDbDeleteProduct } from "@/domain/usecases/product/deleteProduct.interface"
import { DbDeleteProduct } from "../dbDeleteProduct.data"

let dbDeleteProductData: IDbDeleteProduct
let findUserIdRepository: IFindUserIdRepository


describe('DbDeleteProduct Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositorytub()
    dbDeleteProductData = new DbDeleteProduct(findUserIdRepository)
  })

  it('should be defined', () => {
    expect(dbDeleteProductData).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbDeleteProductData.delete({
      company_id: 1,
      params: { id: 1 },
      user: 1
    })
    expect(res).toHaveBeenCalledWith(1)
  })
})
