import { FindUserIdRepositoryStub } from "@/data/mocks/company.mock"
import { CreateProductRepositoryStub, FindByProductNameRepositoryStub } from "@/data/mocks/product.mock"
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface"
import { ICreateProductRepository } from "@/data/protocols/db/product/createProductRepository.interface"
import { IFindByProductNameRepository } from "@/data/protocols/db/product/findByNameProductRepository.interface"
import { IAddProduct } from "@/domain/usecases/product/addProductinterface"
import { DbAddProduct } from "../dbAddProduct.data"

let dbAddProductData: IAddProduct
let findUserIdRepository: IFindUserIdRepository
let findByProductNameRepository: IFindByProductNameRepository
let createProductRepository: ICreateProductRepository

describe('DbAddProduct Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositoryStub()
    findByProductNameRepository = new FindByProductNameRepositoryStub()
    createProductRepository = new CreateProductRepositoryStub()
    dbAddProductData = new DbAddProduct(findUserIdRepository, findByProductNameRepository, createProductRepository)
  })

  it('should be defined', () => {
    expect(dbAddProductData).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbAddProductData.add({
      name: 'product',
      company_id: 2,
      user: '1',
    })
    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if FindUserIdRepository return an user', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId')

    const res = await dbAddProductData.add({
      name: 'product',
      company_id: 2,
      user: '1',
    })

    expect(res).toEqual({ error: 'Você não tem permissão para cadastrar um produto em outra empresa.'})
  })

  it('should call FindByProductNameRepository with success', async () => {
    const res = jest.spyOn(findByProductNameRepository, 'findName')

    await dbAddProductData.add({
      name: 'product',
      company_id: 1,
      user: '1',
    })
    expect(res).toHaveBeenCalledWith('product')
  })

  it('should return an error message if FindByProductNameRepository returns a product', async () => {

     const res = await dbAddProductData.add({
      name: 'product',
      company_id: 1,
      user: '1',
    })
    expect(res).toEqual({ error: 'Este nome já está em uso, escolha outro.'})
  })

  it('should call CreateProductRepository with success', async () => {
    const res = jest.spyOn(createProductRepository, 'create')
    jest.spyOn(findByProductNameRepository, 'findName').mockResolvedValue(undefined)

    await dbAddProductData.add({
      name: 'product',
      company_id: 1,
      user: '1',
    })
    expect(res).toHaveBeenCalledWith({ name: 'product', company_id: 1})
  })

    it('should return an new product', async () => {
    jest.spyOn(findByProductNameRepository, 'findName').mockResolvedValue(undefined)

    const res = await dbAddProductData.add({
      name: 'product',
      company_id: 1,
      user: '1',
    })
    expect(res).toEqual({
      name: 'product',
      company_id: 1,
      id: 1
    })
  })


})
