import { Company } from "@/infra/db/typeorm/entities/Company.entity";

export interface ICreateCompanyDTO {
  name: string,
  cnpj: string
  user_id: number
}

export interface ICreateCompanyRepository {
  create (date: ICreateCompanyDTO): Promise<Company>
}
