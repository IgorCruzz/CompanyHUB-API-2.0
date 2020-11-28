import { Company } from "@/infra/db/typeorm/entities/Company.entity"

export interface IFindByIdRepository {
  findId (id: number): Promise<Company>
}
