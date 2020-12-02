import { DbFindOneProductStub } from '@/presentation/mocks/product.mock'
import { IController, IHttpRequest } from '@/presentation/protocols'
import MockDate from 'mockdate'
import { IDbFindOneProduct } from '@/domain/usecases/product/findOneProduct.interface'
import { FindOneProductController } from '../findOneProduct.controller'

let findOneProductController: IController
let findOneProduct: IDbFindOneProduct

describe('FindOneProduct Controller', () => {
  beforeEach(() => {
    findOneProduct = new DbFindOneProductStub()
    findOneProductController = new FindOneProductController(findOneProduct)
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should be defined', () => {
    expect(findOneProductController).toBeDefined()
  })

  it('should return status 200 if FindOneProduct returns an Product array', async () => {
    const req: IHttpRequest = {
      params: { id: 1 }
    }

    const res = await findOneProductController.handle(req)

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

  it('throw error 500 if FindOneProduct throws', async () => {
    jest.spyOn(findOneProduct, 'findOne').mockRejectedValue(new Error())

    const req: IHttpRequest = {
      params: { id: 1 }
    }

    const res = await findOneProductController.handle(req)

    expect(res).toEqual({
      status: 500,
      body: new Error()
    })
  })
})
