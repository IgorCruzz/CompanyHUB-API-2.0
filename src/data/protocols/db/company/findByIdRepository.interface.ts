import { ICompanyModel } from '@/domain/models/company.interface';

export interface IFindByIdRepository {
  findId(id: number): Promise<ICompanyModel>
}
