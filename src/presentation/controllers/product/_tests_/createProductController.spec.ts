import { IAddProduct } from '@/domain/usecases/product/addProductinterface'
import { DbAddProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { CreateProductController } from '../createProduct.controller'

let createProductController: IController
let addProduct: IAddProduct

describe('CreateProduct Controller', () => {
  beforeEach(() => {
    addProduct = new DbAddProductStub()
    createProductController = new CreateProductController(addProduct)
  })

  it('should be defined', () => {
    expect(createProductController).toBeDefined()
  })

  it('should return statusCode 200 if addProduct returns a Product', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'product',
        company_id: 1
      }
    }

    const res = await createProductController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: {
        company_id: 1,
        name: 'product',
        id: 1
      }
    })
  })
})
