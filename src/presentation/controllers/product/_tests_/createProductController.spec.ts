import { IAddProduct } from '@/domain/usecases/product/addProduct.interface'
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

  it('should return status 200 if addProduct returns a Product', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'product',
        company_id: 1
      }
    }

    const res = await createProductController.handle(req)

    expect(res).toEqual({
      status: 201,
      body: {
        company_id: 1,
        name: 'product',
        id: 1
      }
    })
  })

  it('should be returns status 401 if addProduct returns an error', async () => {
    jest
      .spyOn(addProduct, 'add')
      .mockResolvedValue({ error: 'Você não tem permissão para cadastrar um produto em outra empresa.' })

    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'product',
        company_id: 1
      }
    }

    const res = await createProductController.handle(req)

    expect(res).toEqual({
      status: 400,
      body: { message: 'Você não tem permissão para cadastrar um produto em outra empresa.' }
    })
  })

  it('throw error 500 if addProduct throws', async () => {
    const req: IHttpRequest = {
      userId: '1',
      body: {
        name: 'product',
        company_id: 1
      }
    }

    jest.spyOn(addProduct, 'add').mockRejectedValue(new Error())

    const res = await createProductController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
