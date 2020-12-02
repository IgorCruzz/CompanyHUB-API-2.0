import { IDbFindAllProducts } from '@/domain/usecases/product/findAllProduct.interface'
import { DbFindAllProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import { FindAllProductsController } from '../findAllProducts.controller'
import MockDate from 'mockdate'

let findAllProductController: IController
let findAllProduct: IDbFindAllProducts

describe('FindAllProducts Controller', () => {
  beforeEach(() => {
    findAllProduct = new DbFindAllProductStub()
    findAllProductController = new FindAllProductsController(findAllProduct)
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should be defined', () => {
    expect(findAllProductController).toBeDefined()
  })

  it('should return status 200 if findAllProduct returns an Products array', async () => {
    const res = await findAllProductController.handle({})

    expect(res).toEqual({
      status: 200,
      body:
      [
        {
          id: 1,
          name: 'product',
          company_id: 1,
          companyConnection: {
            user_id: 1,
            cnpj: '11111111111',
            id: 1,
            productConnection: [],
            name: 'company',
            created_at: new Date(),
            updated_at: new Date()
          },
          serviceConnection: [],
          created_at: new Date(),
          updated_at: new Date()
        }

      ]
    })
  })

  it('throw error 500 if findAllProduct throws', async () => {
    jest.spyOn(findAllProduct, 'findAll').mockRejectedValue(new Error())

    const res = await findAllProductController.handle({})

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
