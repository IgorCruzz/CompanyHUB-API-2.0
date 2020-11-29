import { ICreateCompanyDTO, ICreateCompanyRepository } from '@/data/protocols/db/company/createCompanyRepository'
import { IDeleteCompanyRepository } from '@/data/protocols/db/company/deleteCompanyRepository.interface'
import { IFindAllCompaniesRepository } from '@/data/protocols/db/company/findAllCompanies.repository'
import { IFindByIdRepository } from '@/data/protocols/db/company/findByIdRepository.interface'
import { IFindCnpjRepository } from '@/data/protocols/db/company/findCnpjRepository.interface'
import { IFindOneCompanyRepository } from '@/data/protocols/db/company/findOneCompanyRepository.interface'
import { IFindUserIdRepository } from '@/data/protocols/db/company/findUserIdRepository.interface'
import { IUpdateCompanyRepository } from '@/data/protocols/db/company/updateCompanyRepository.interface'
import { Company } from '../../entities/Company.entity'
import { getRepository } from 'typeorm'

export class CompanyRepository implements
  IFindUserIdRepository,
  IFindByIdRepository,
  IFindCnpjRepository,
  ICreateCompanyRepository,
  IDeleteCompanyRepository,
  IFindAllCompaniesRepository,
  IFindOneCompanyRepository,
  IUpdateCompanyRepository {
  async findUserId (id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ user_id: id })
  }

  async findId (id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ id })
  }

  async findAll (): Promise<Company[]> {
    const orm = getRepository(Company)

    return await orm.find({
      relations: ['productConnection']
    })
  }

  async findCnpj (cnpj: string): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ cnpj: cnpj })
  }

  async create (date: ICreateCompanyDTO): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.save(date)
  }

  async findOne (id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({
      where: { user_id: id },
      relations: ['productConnection']
    })
  }

  async delete (id: number): Promise<boolean> {
    const orm = getRepository(Company)

    const deleteCompany = await orm.delete(id)

    return deleteCompany && true
  }

  async update (id: number, data: any): Promise<boolean> {
    const orm = getRepository(Company)

    const updateCompany = await orm.update(id, data)

    return updateCompany && true
  }
}
