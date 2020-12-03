import { IFindUserIdRepository } from '@/data/protocols/db/company/findUserIdRepository.interface'
import { IFindByProductNameRepository } from '@/data/protocols/db/product/findByNameProductRepository.interface'
import { IUpdateProductRepository } from '@/data/protocols/db/product/updateProductRepository.interface'
import {
  IUpdateProduct,
  IUpdateProductDTO,
  IUpdateProductResult,
} from '@/domain/usecases/product/updateProduct.interface'

export class DbUpdateProduct implements IUpdateProduct {
  constructor(
    private readonly findUserIdRepository: IFindUserIdRepository,
    private readonly findByProductNameRepository: IFindByProductNameRepository,
    private readonly updateProductRepository: IUpdateProductRepository
  ) {}

  async update(
    id: number,
    userId: string,
    data: IUpdateProductDTO
  ): Promise<IUpdateProductResult> {
    const { company_id, name } = data

    const company = await this.findUserIdRepository.findUserId(Number(userId))

    if (company.id !== company_id)
      return {
        error:
          'Você não tem permissão para deletar um produto em outra empresa.',
      }

    const product = await this.findByProductNameRepository.findName(name)

    if (product) return { error: 'Este nome ja está em uso, escolha outro.' }

    const request = JSON.stringify(data).toLowerCase()

    const parsed = JSON.parse(request)

    const updated = await this.updateProductRepository.update(id, {
      name: parsed.name,
    })

    return { updated }
  }
}
