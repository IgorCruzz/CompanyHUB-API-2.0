import { IDbFindAllProducts } from '@/domain/usecases/product/findAllProduct.interface'
import { DbFindAllProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { FindAllProductsController } from '../findAllProducts.controller'

let findAllProductController: IController
let findAllProduct: IDbFindAllProducts

describe('FindAllProducts Controller', () => {
  beforeEach(() => {
    findAllProduct = new DbFindAllProductStub()
    findAllProductController = new FindAllProductsController()
  })

  it('should be defined', () => {
    expect(findAllProductController).toBeDefined()
  })
})
