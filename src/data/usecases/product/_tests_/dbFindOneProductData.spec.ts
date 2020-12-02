import { ProductFindOneRepositoryStub } from "@/data/mocks/product.mock"
import MockDate from 'mockdate'
import { IDbFindOneProduct } from "@/domain/usecases/product/findOneProduct.interface"
import { IProductFindOneRepository } from "@/data/protocols/db/product/findOneProductRepository.interface"
import { DbFindOneProduct } from "../dbFindOneProduct.data"


let dbFindOneProduct: IDbFindOneProduct
let productFindOneRepository: IProductFindOneRepository


describe('DbFindOneProduct Data', () => {
  beforeEach(() => {
    productFindOneRepository = new ProductFindOneRepositoryStub()
    dbFindOneProduct = new DbFindOneProduct(productFindOneRepository)
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should be defined', () => {
    expect(dbFindOneProduct).toBeDefined()
  })

  it('should call productFindOneRepository with success', async () => {
    const res = jest.spyOn(productFindOneRepository, 'findOne')

    await dbFindOneProduct.findOne(1)

    expect(res).toHaveBeenCalled()
  })

  it('should return all products', async () => {
    const res = await dbFindOneProduct.findOne(1)

    expect(res).toEqual([{
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
          updated_at: new Date(),
        },
        serviceConnection: [],
        created_at: new Date(),
        updated_at: new Date()
    }])
  })


})
