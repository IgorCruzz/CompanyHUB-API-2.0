import { FindUserIdRepositoryStub } from '@/data/mocks/company.mock'
import {
  DeleteProductRepositoryStub,
  FindByIdRepositoryStub,
} from '@/data/mocks/product.mock'
import { IFindUserIdRepository } from '@/data/protocols/db/company/findUserIdRepository.interface'
import { IDeleteProductRepository } from '@/data/protocols/db/product/deleteProductRepository.interface'
import { IFindByIdRepository } from '@/data/protocols/db/product/findByIdRepository.interface'
import { IDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { DbDeleteProduct } from '../dbDeleteProduct.data'

let dbDeleteProductData: IDeleteProduct
let findUserIdRepository: IFindUserIdRepository
let findByIdRepository: IFindByIdRepository
let deleteProductRepository: IDeleteProductRepository

describe('DbDeleteProduct Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositoryStub()
    findByIdRepository = new FindByIdRepositoryStub()
    deleteProductRepository = new DeleteProductRepositoryStub()
    dbDeleteProductData = new DbDeleteProduct(
      findUserIdRepository,
      findByIdRepository,
      deleteProductRepository
    )
  })

  it('should be defined', () => {
    expect(dbDeleteProductData).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbDeleteProductData.delete({
      company_id: 1,
      params: { id: 1 },
      user: 1,
    })
    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if FindUserIdRepository return an user', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId')

    const res = await dbDeleteProductData.delete({
      company_id: 2,
      params: { id: 2 },
      user: 1,
    })

    expect(res).toEqual({
      error: 'Você não tem permissão para deletar um produto em outra empresa.',
    })
  })

  it('should call findByIdRepository with success', async () => {
    const res = jest.spyOn(findByIdRepository, 'findId')

    await dbDeleteProductData.delete({
      company_id: 1,
      params: { id: 1 },
      user: 1,
    })
    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if findByIdRepository return an user', async () => {
    jest.spyOn(findByIdRepository, 'findId').mockResolvedValue(undefined)

    const res = await dbDeleteProductData.delete({
      company_id: 1,
      params: { id: 1 },
      user: 1,
    })

    expect(res).toEqual({ error: 'Insira um ID valido.' })
  })

  it('should call deleteProductRepository with success', async () => {
    const res = jest.spyOn(findByIdRepository, 'findId')

    await dbDeleteProductData.delete({
      company_id: 1,
      params: { id: 1 },
      user: 1,
    })
    expect(res).toHaveBeenCalledWith(1)
  })

  it('should return an product deleted', async () => {
    const res = await dbDeleteProductData.delete({
      company_id: 1,
      params: { id: 1 },
      user: 1,
    })
    expect(res).toEqual({ deleted: true })
  })
})
