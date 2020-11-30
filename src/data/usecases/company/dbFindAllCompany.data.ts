import { IFindAllCompaniesRepository } from '@/data/protocols/db/company/findAllCompanies.repository'
import {
  IDbFindAllCompany,
  IDbFindAllCompanyResult,
} from '@/domain/usecases/company/findAllCompanies.interface'

export class DbFindAllCompany implements IDbFindAllCompany {
  constructor(
    private readonly findAllCompaniesRepository: IFindAllCompaniesRepository
  ) {}

  async findAll(): Promise<IDbFindAllCompanyResult[]> {
    return await this.findAllCompaniesRepository.findAll()
  }
}
