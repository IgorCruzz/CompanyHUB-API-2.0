import { Company } from "@/infra/db/typeorm/entities/Company.entity";

export interface IFindOneCompanyRepository {
  findOne (id: number): Promise<Company>
}
