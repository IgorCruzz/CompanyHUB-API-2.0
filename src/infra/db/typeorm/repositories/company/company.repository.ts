import { ICreateCompanyDTO, ICreateCompanyRepository } from '@/data/protocols/db/company/createCompanyRepository'
import { IFindCnpjRepository } from '@/data/protocols/db/company/findCnpjRepository.interface'
import { IFindUserIdRepository } from '@/data/protocols/db/company/findUserIdRepository.interface'
import { getRepository } from 'typeorm'
import { Company } from '../../entities/Company.entity'

export class CompanyRepository implements
  IFindUserIdRepository,
  IFindCnpjRepository,
  ICreateCompanyRepository {
  async findUserId (id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ user_id: id })
  }

  async findCnpj (cnpj: string): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ cnpj })
  }

  async create (date: ICreateCompanyDTO): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.save(date)
  }
}
