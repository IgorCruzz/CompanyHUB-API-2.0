import {
  ICreateCompanyDTO,
  ICreateCompanyRepository,
} from '@/data/protocols/db/company/createCompanyRepository'
import { IDeleteCompanyRepository } from '@/data/protocols/db/company/deleteCompanyRepository.interface'
import { IFindAllCompaniesRepository } from '@/data/protocols/db/company/findAllCompanies.repository'
import { IFindByIdRepository } from '@/data/protocols/db/company/findByIdRepository.interface'
import { IFindCnpjRepository } from '@/data/protocols/db/company/findCnpjRepository.interface'
import { IFindOneCompanyRepository } from '@/data/protocols/db/company/findOneCompanyRepository.interface'
import { IFindUserIdRepository } from '@/data/protocols/db/company/findUserIdRepository.interface'
import { IUpdateCompanyRepository } from '@/data/protocols/db/company/updateCompanyRepository.interface'
import { getRepository } from 'typeorm'
import { ICompanyModel } from '@/domain/models/company.interface'
import { IFindByUserRelationRepository } from '@/data/protocols/db/company/findByUserRelationRepository.interface'
import { Company } from '../entities/Company.entity'

export class CompanyRepository
  implements
    IFindUserIdRepository,
    IFindByIdRepository,
    IFindCnpjRepository,
    ICreateCompanyRepository,
    IDeleteCompanyRepository,
    IFindAllCompaniesRepository,
    IFindOneCompanyRepository,
    IUpdateCompanyRepository,
    IFindByUserRelationRepository {
  async findUserId(id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ user_id: id })
  }

  async findByUserRelation(id: number): Promise<ICompanyModel> {
    const orm = getRepository(Company)

    return await orm.findOne({
      relations: ['user'],
      where: {
        user: {
          id,
        },
      },
    })
  }

  async findId(id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ id })
  }

  async findAll(): Promise<Company[]> {
    const orm = getRepository(Company)

    return await orm.find({
      relations: ['productConnection'],
    })
  }

  async findCnpj(cnpj: string): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({ cnpj: cnpj })
  }

  async create(date: ICreateCompanyDTO): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.save(date)
  }

  async findOne(id: number): Promise<Company> {
    const orm = getRepository(Company)

    return await orm.findOne({
      where: { user_id: id },
      relations: ['productConnection'],
    })
  }

  async delete(id: number): Promise<boolean> {
    const orm = getRepository(Company)

    const deleteCompany = await orm.delete(id)

    return deleteCompany && true
  }

  async update(id: number, data: any): Promise<boolean> {
    const orm = getRepository(Company)

    const updateCompany = await orm.update(id, data)

    return updateCompany && true
  }
}
