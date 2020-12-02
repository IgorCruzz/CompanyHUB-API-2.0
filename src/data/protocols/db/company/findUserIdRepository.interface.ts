import { ICompanyModel } from '@/domain/models/company.interface';
import { Company } from '@/infra/db/typeorm/entities/Company.entity'

export interface IFindUserIdRepository {
  findUserId(id: number): Promise<ICompanyModel>
}
