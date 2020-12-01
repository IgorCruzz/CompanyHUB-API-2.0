import { FindUserIdRepositorytub } from "@/data/mocks/company.mock";
import { FindByProductNameRepositoryStub, UpdateProductRepositoryStub } from "@/data/mocks/product.mock";
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IFindByProductNameRepository } from "@/data/protocols/db/product/findByNameProductRepository.interface";
import { IUpdateProductRepository } from "@/data/protocols/db/product/updateProductRepository.interface";
import { IUpdateProduct} from "@/domain/usecases/product/updateProduct.interface";
import { DbUpdateProduct } from "../dbUpdateProduct.data";

let dbUpdateProduct: IUpdateProduct
let findUserIdRepository: IFindUserIdRepository
let findByProductNameRepository: IFindByProductNameRepository
let updateProductRepository: IUpdateProductRepository

describe('DbUpdateProduct Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositorytub()
    findByProductNameRepository = new FindByProductNameRepositoryStub()
    updateProductRepository = new UpdateProductRepositoryStub()
    dbUpdateProduct = new DbUpdateProduct(
      findUserIdRepository,
      findByProductNameRepository,
      updateProductRepository)
  })

  it('should be defined', () => {
    expect(dbUpdateProduct).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbUpdateProduct.update(1, {
      company_id: 1,
      name: 'product',
      user: 1
    })
    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if FindUserIdRepository return an user', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId')

    const res =   await dbUpdateProduct.update(1, {
      company_id: 2,
      name: 'product',
      user: 1
    })

    expect(res).toEqual({ error: 'Você não tem permissão para deletar um produto em outra empresa.'})
})

it('should call FindByProductNameRepository with success', async () => {
  const res = jest.spyOn(findByProductNameRepository, 'findName')

   await dbUpdateProduct.update(1, {
    company_id: 1,
    name: 'product',
    user: 1
  })
  expect(res).toHaveBeenCalledWith('product')
})

it('should returns an error message if FindUserIdRepository return an user', async () => {
  jest.spyOn(findUserIdRepository, 'findUserId')

  const res =   await dbUpdateProduct.update(1, {
    company_id: 1,
    name: 'product',
    user: 1
  })

  expect(res).toEqual({ error: 'Este nome ja está em uso, escolha outro.'})
})

it('should call updateProductRepository with success', async () => {
  jest.spyOn(findByProductNameRepository, 'findName').mockResolvedValue(undefined)
  const res = jest.spyOn(updateProductRepository, 'update')

   await dbUpdateProduct.update(1, {
    company_id: 1,
    name: 'product',
    user: 1
  })
  expect(res).toHaveBeenCalledWith(1, { name: 'product' })
})
});
