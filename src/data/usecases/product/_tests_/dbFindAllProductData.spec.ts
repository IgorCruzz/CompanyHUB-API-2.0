import { FindAllProductsRepositoryStub } from "@/data/mocks/product.mock"
import { IProductFindAllRepository } from "@/data/protocols/db/product/findAllProductsRepository.interface"
import { IDbFindAllProducts } from "@/domain/usecases/product/findAllProduct.interface"
import { DbFindAllProducts } from "../dbFindAllProducts.data"


let dbFindAllProducts: IDbFindAllProducts
let productFindAllRepository: IProductFindAllRepository


describe('DbFindAllProduct Data', () => {
  beforeEach(() => {
    productFindAllRepository = new FindAllProductsRepositoryStub()
    dbFindAllProducts = new DbFindAllProducts(productFindAllRepository)
  })

  it('should be defined', () => {
    expect(dbFindAllProducts).toBeDefined()
  })

  it('should call productFindAllRepository with success', async () => {
    const res = jest.spyOn(productFindAllRepository, 'findAll')

    await dbFindAllProducts.findAll()

    expect(res).toHaveBeenCalled()
  })


})
