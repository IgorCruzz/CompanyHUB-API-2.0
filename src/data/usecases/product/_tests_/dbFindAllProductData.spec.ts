import { FindAllProductsRepositoryStub } from "@/data/mocks/product.mock"
import { IProductFindAllRepository } from "@/data/protocols/db/product/findAllProductsRepository.interface"
import { IFindAllProducts } from "@/domain/usecases/product/findAllProduct.interface"
import { DbFindAllProducts } from "../dbFindAllProducts.data"
import MockDate from 'mockdate'


let dbFindAllProducts: IFindAllProducts
let productFindAllRepository: IProductFindAllRepository


describe('DbFindAllProduct Data', () => {
  beforeEach(() => {
    productFindAllRepository = new FindAllProductsRepositoryStub()
    dbFindAllProducts = new DbFindAllProducts(productFindAllRepository)
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should be defined', () => {
    expect(dbFindAllProducts).toBeDefined()
  })

  it('should call productFindAllRepository with success', async () => {
    const res = jest.spyOn(productFindAllRepository, 'findAll')

    await dbFindAllProducts.findAll()

    expect(res).toHaveBeenCalled()
  })

  it('should return all products', async () => {
    const res = await dbFindAllProducts.findAll()

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
