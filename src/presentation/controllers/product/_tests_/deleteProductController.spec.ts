import { IDbDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { DbDeleteProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteProductController } from '../deleteProduct.controller'

let deleteProductController: IController
let deleteProduct: IDbDeleteProduct

describe('DeleteProduct Controller', () => {
  beforeEach(() => {
    deleteProduct = new DbDeleteProductStub()
    deleteProductController = new DeleteProductController(deleteProduct)
  })

  it('should be defined', () => {
    expect(deleteProductController).toBeDefined()
  })

  it('should return statusCode 200 if deleteProduct returns a Product', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        company_id: 1
      },
      params: { id: 1 }
    }

    const res = await deleteProductController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: { message: 'Produto deletado com sucesso!' }
    })
  })
})
