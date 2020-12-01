import { IUpdateProduct } from '@/domain/usecases/product/updateProduct.interface'
import { DbUpdateProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { UpdateProductController } from '../updateProduct.controller'

let updateProductController: IController
let updateProductData: IUpdateProduct

describe('UpdateUser Controller', () => {
  beforeEach(() => {
    updateProductData = new DbUpdateProductStub()
    updateProductController = new UpdateProductController(updateProductData)
  })

  it('should be defined', () => {
    expect(updateProductController).toBeDefined()
  })

  it('should return statusCode 200 if updateProductData returns updated true', async () => {
    const req: IHttpRequest = {
      params: { id: 1 },
      userId: '1',
      body: {
        name: 'product'
      }
    }

    const res = await updateProductController.handle(req)

    expect(res).toEqual({
      statusCode: 200,
      body: {
        message: 'Produto atualizado com sucesso!'
      }
    })
  })

  it('should be returns statusCode 401 if updateProductData returns an error', async () => {
    jest
      .spyOn(updateProductData, 'update')
      .mockResolvedValue({ error: 'Você não tem permissão para atualizar um produto em outra empresa.' })

    const req: IHttpRequest = {
      params: { id: 1 },
      userId: '1',
      body: {
        name: 'product'
      }
    }

    const res = await updateProductController.handle(req)

    expect(res).toEqual({
      statusCode: 400,
      body: { message: 'Você não tem permissão para atualizar um produto em outra empresa.' }
    })
  })

  it('throw error 500 if updateProductData throws', async () => {
    const req: IHttpRequest = {
      params: { id: 1 },
      userId: '1',
      body: {
        name: 'product'
      }
    }

    jest.spyOn(updateProductData, 'update').mockRejectedValue(new Error())

    const res = await updateProductController.handle(req)

    expect(res).toEqual({
      statusCode: 500,
      body: new Error()
    })
  })
})
