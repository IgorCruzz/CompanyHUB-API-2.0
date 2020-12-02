import { IDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { DbDeleteProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { DeleteProductController } from '../deleteProduct.controller'

let deleteProductController: IController
let deleteProduct: IDeleteProduct

describe('DeleteProduct Controller', () => {
  beforeEach(() => {
    deleteProduct = new DbDeleteProductStub()
    deleteProductController = new DeleteProductController(deleteProduct)
  })

  it('should be defined', () => {
    expect(deleteProductController).toBeDefined()
  })

  it('should return status 200 if deleteProduct returns a Product', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        company_id: 1,
      },
      params: { id: 1 },
    }

    const res = await deleteProductController.handle(req)

    expect(res).toEqual({
      status: 200,
      body: { message: 'Produto deletado com sucesso!' },
    })
  })

  it('should be returns status 401 if deleteProduct returns an error', async () => {
    jest.spyOn(deleteProduct, 'delete').mockResolvedValue({
      error: 'Você não tem permissão para deletar um produto em outra empresa.',
    })

    const req: IHttpRequest = {
      userId: '1',
      body: {
        company_id: 1,
      },
      params: { id: 1 },
    }

    const res = await deleteProductController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: {
        message:
          'Você não tem permissão para deletar um produto em outra empresa.',
      },
    })
  })

  it('throw error 500 if deleteProduct throws', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        company_id: 1,
      },
      params: { id: 1 },
    }

    jest.spyOn(deleteProduct, 'delete').mockRejectedValue(new Error())

    const res = await deleteProductController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
