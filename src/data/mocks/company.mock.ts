import { ICompanyModel } from '@/domain/models/company.interface'
import { IUpdateCompanyResult } from '@/domain/usecases/company/updateCompany.interface'
import { Company } from '@/infra/db/typeorm/entities/Company.entity'
import {
  ICreateCompanyDTO,
  ICreateCompanyRepository,
} from '../protocols/db/company/createCompanyRepository'
import { IDeleteCompanyRepository } from '../protocols/db/company/deleteCompanyRepository.interface'
import { IFindAllCompaniesRepository } from '../protocols/db/company/findAllCompanies.repository'
import { IFindByIdRepository } from '../protocols/db/company/findByIdRepository.interface'
import { IFindByUserRelationRepository } from '../protocols/db/company/findByUserRelationRepository.interface'
import { IFindCnpjRepository } from '../protocols/db/company/findCnpjRepository.interface'
import { IFindOneCompanyRepository } from '../protocols/db/company/findOneCompanyRepository.interface'
import { IFindUserIdRepository } from '../protocols/db/company/findUserIdRepository.interface'
import { IUpdateCompanyDTO, IUpdateCompanyRepository } from '../protocols/db/company/updateCompanyRepository.interface'

export class FindUserIdRepositoryStub implements IFindUserIdRepository {
  async findUserId(id: number): Promise<Company> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      name: 'company',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class FindByUserRelationStub implements IFindByUserRelationRepository {
  async findByUserRelation (id: number): Promise<ICompanyModel> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      name: 'company',
      user: {
        id: 1,
        name: 'name',
        activation: true,
        administrator: false,
        email: 'user@mail.com',
        password_hash: 'password',
        created_at: new Date(),
        updated_at: new Date()
      },
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class FindCnpjRepositoryStub implements IFindCnpjRepository {
  async findCnpj(cnpj: string): Promise<Company> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      name: 'company',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class CreateCompanyRepositoryStub implements ICreateCompanyRepository {
  async create(date: ICreateCompanyDTO): Promise<Company> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      name: 'company',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class FindByIdRepositoryStub implements IFindByIdRepository {
  async findId(id: number): Promise<Company> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      name: 'company',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class DeleteUserRepositoryStub implements IDeleteCompanyRepository {
  async delete(id: number): Promise<boolean> {
    return Promise.resolve(true)
  }
}

export class FindAllCompaniesRepositoryStub implements IFindAllCompaniesRepository {
  async findAll(): Promise<Company[]> {
    return Promise.resolve([
      {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  }
}

export class FindOneCompanyRepositoryStub implements IFindOneCompanyRepository {
  async findOne(id: number): Promise<Company> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      productConnection: [],
      name: 'company',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class UpdateCompanyRepositoryStub implements IUpdateCompanyRepository {
  async update(id: number, data: IUpdateCompanyDTO): Promise<boolean>{
    return Promise.resolve(true)
  }
}
