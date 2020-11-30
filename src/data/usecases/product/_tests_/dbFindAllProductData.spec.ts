import { IDbFindAllProducts } from "@/domain/usecases/product/findAllProduct.interface"
import { DbFindAllProducts } from "../dbFindAllProducts.data"


let dbFindAllProducts: IDbFindAllProducts


describe('DbFindAllProduct Data', () => {
  beforeEach(() => {
    dbFindAllProducts = new DbFindAllProducts()
  })

  it('should be defined', () => {
    expect(dbFindAllProducts).toBeDefined()
  })


})
