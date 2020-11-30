import { Company } from '@/infra/db/typeorm/entities/Company.entity'

export interface IFindCnpjRepository {
  findCnpj(cnpj: string): Promise<Company>
}
