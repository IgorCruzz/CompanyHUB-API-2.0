import { FindUserIdRepositorytub } from "@/data/mocks/company.mock"
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface"
import { IDbDeleteProduct } from "@/domain/usecases/product/deleteProduct.interface"
import { DbDeleteProduct } from "../dbDeleteProduct.data"

let dbDeleteProductData: IDbDeleteProduct
let findUserIdRepository: IFindUserIdRepository


describe('DbDeleteProduct Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositorytub()
    dbDeleteProductData = new DbDeleteProduct()
  })

  it('should be defined', () => {
    expect(dbDeleteProductData).toBeDefined()
  })
})
