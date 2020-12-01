import { ICompanyModel } from "@/domain/models/company.interface"

export interface IFindByUserRelationRepository {
  findByUserRelation (id: number): Promise<ICompanyModel>
}
