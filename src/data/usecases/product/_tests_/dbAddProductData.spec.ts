import { FindUserIdRepositorytub } from "@/data/mocks/company.mock"
import { FindByProductNameRepository } from "@/data/mocks/product.mock"
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface"
import { IFindByProductNameRepository } from "@/data/protocols/db/product/findByNameProductRepository.interface"
import { IAddProduct } from "@/domain/usecases/product/addProductinterface"
import { DbAddProduct } from "../dbAddProduct.data"

let dbAddProductData: IAddProduct
let findUserIdRepository: IFindUserIdRepository
let findByProductNameRepository: IFindByProductNameRepository

describe('DbAddProduct Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositorytub()
    findByProductNameRepository = new FindByProductNameRepository()
    dbAddProductData = new DbAddProduct(findUserIdRepository, findByProductNameRepository)
  })

  it('should be defined', () => {
    expect(dbAddProductData).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbAddProductData.add({
      name: 'company',
      company_id: 2,
      user: '1',
    })
    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if FindUserIdRepository return an user', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId')

    const res = await dbAddProductData.add({
      name: 'company',
      company_id: 2,
      user: '1',
    })

    expect(res).toEqual({ error: 'Você não tem permissão para cadastrar um produto em outra empresa.'})
  })

  it('should call FindByProductNameRepository with success', async () => {
    const res = jest.spyOn(findByProductNameRepository, 'findName')

    await dbAddProductData.add({
      name: 'company',
      company_id: 1,
      user: '1',
    })
    expect(res).toHaveBeenCalledWith('company')
  })


})
