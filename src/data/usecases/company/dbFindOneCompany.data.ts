import { IFindOneCompanyRepository } from '@/data/protocols/db/company/findOneCompanyRepository.interface'
import {
  IFindOneCompany,
  IFindOneCompanyResult,
} from '@/domain/usecases/company/findOneCompany.interface'

export class DbFindOneCompany implements IFindOneCompany {
  constructor(
    private readonly findOneCompanyRepository: IFindOneCompanyRepository
  ) {}

  async findOne(id: string): Promise<IFindOneCompanyResult> {
    const findCompany = await this.findOneCompanyRepository.findOne(Number(id))

    if (!findCompany) return { error: 'Você não cadastrou sua empresa ainda.' }

    const { created_at, updated_at, ...company } = findCompany

    return company
  }
}
