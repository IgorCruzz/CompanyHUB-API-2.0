import { Company } from '@/infra/db/typeorm/entities/Company.entity'

export interface IFindAllCompaniesRepository {
  findAll(): Promise<Company[]>
}
