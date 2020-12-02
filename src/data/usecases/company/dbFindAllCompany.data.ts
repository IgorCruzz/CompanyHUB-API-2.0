import { IFindAllCompaniesRepository } from '@/data/protocols/db/company/findAllCompanies.repository'
import {
  IFindAllCompany,
  IFindAllCompanyResult,
} from '@/domain/usecases/company/findAllCompanies.interface'

export class DbFindAllCompany implements IFindAllCompany {
  constructor(
    private readonly findAllCompaniesRepository: IFindAllCompaniesRepository
  ) {}

  async findAll(): Promise<IFindAllCompanyResult[]> {
    return await this.findAllCompaniesRepository.findAll()
  }
}
