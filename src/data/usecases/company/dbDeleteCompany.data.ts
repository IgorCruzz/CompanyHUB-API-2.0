import { IDeleteCompanyRepository } from '@/data/protocols/db/company/deleteCompanyRepository.interface'
import { IFindByIdRepository } from '@/data/protocols/db/company/findByIdRepository.interface'
import {
  IDbDeleteCompany,
  IDbDeleteCompanyDTO,
  IDbDeleteCompanyResult,
} from '@/domain/usecases/company/deleteCompany.interface'

export class DbDeleteCompany implements IDbDeleteCompany {
  constructor(
    private readonly findByIdRepository: IFindByIdRepository,
    private readonly deleteCompanyRepository: IDeleteCompanyRepository
  ) {}

  async delete(data: IDbDeleteCompanyDTO): Promise<IDbDeleteCompanyResult> {
    const { user, params } = data

    const findCompany = await this.findByIdRepository.findId(Number(params.id))

    if (!findCompany) return { error: 'Não existe uma empresa com este ID.' }

    if (Number(user) !== findCompany.user_id)
      return {
        error: 'Você não tem permissão parar alterar dados de outra empresa.',
      }

    const deleted = await this.deleteCompanyRepository.delete(Number(params.id))

    return { deleted }
  }
}
