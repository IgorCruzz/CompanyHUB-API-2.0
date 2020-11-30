import {
  IAddCompany,
  IAddCompanyDTO,
  IAddCompanyResult
} from '@/domain/usecases/company/addCompany.interface'
import {
  IDbDeleteCompany,
  IDbDeleteCompanyDTO,
  IDbDeleteCompanyResult
} from '@/domain/usecases/company/deleteCompany.interface'
import {
  IDbFindAllCompany,
  IDbFindAllCompanyResult
} from '@/domain/usecases/company/findAllCompanies.interface'
import {
  IDbFindOneCompany,
  IDbFindOneCompanyResult
} from '@/domain/usecases/company/findOneCompany.interface'
import {
  IUpdateCompany,
  IUpdateCompanyDTO,
  IUpdateCompanyResult
} from '@/domain/usecases/company/updateCompany.interface'

export class DbAddCompanyStub implements IAddCompany {
  async add (data: IAddCompanyDTO): Promise<IAddCompanyResult> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '1111111111',
      id: 1,
      name: 'company'
    })
  }
}

export class DbDeleteCompanyStub implements IDbDeleteCompany {
  async delete (data: IDbDeleteCompanyDTO): Promise<IDbDeleteCompanyResult> {
    return Promise.resolve({
      deleted: true
    })
  }
}

export class DbFindAllCompanyStub implements IDbFindAllCompany {
  async findAll (): Promise<IDbFindAllCompanyResult[]> {
    return Promise.resolve([
      {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company'
      },
      {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company'
      }
    ])
  }
}

export class DbFindOneCompanyCompanyStub implements IDbFindOneCompany {
  async findOne (id: string): Promise<IDbFindOneCompanyResult> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      productConnection: [],
      name: 'company'
    })
  }
}

export class DbUpdateCompanyStub implements IUpdateCompany {
  async update (
    id: number,
    data: IUpdateCompanyDTO
  ): Promise<IUpdateCompanyResult> {
    return Promise.resolve({ updated: true })
  }
}
