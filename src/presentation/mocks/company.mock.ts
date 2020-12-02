import {
  IAddCompany,
  IAddCompanyDTO,
  IAddCompanyResult,
} from '@/domain/usecases/company/addCompany.interface'
import {
  IDeleteCompany,
  IDeleteCompanyDTO,
  IDeleteCompanyResult,
} from '@/domain/usecases/company/deleteCompany.interface'
import {
  IFindAllCompany,
  IFindAllCompanyResult,
} from '@/domain/usecases/company/findAllCompanies.interface'
import {
  IFindOneCompany,
  IFindOneCompanyResult,
} from '@/domain/usecases/company/findOneCompany.interface'
import {
  IUpdateCompany,
  IUpdateCompanyDTO,
  IUpdateCompanyResult,
} from '@/domain/usecases/company/updateCompany.interface'

export class DbAddCompanyStub implements IAddCompany {
  async add(data: IAddCompanyDTO): Promise<IAddCompanyResult> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '1111111111',
      id: 1,
      name: 'company',
    })
  }
}

export class DbDeleteCompanyStub implements IDeleteCompany {
  async delete(data: IDeleteCompanyDTO): Promise<IDeleteCompanyResult> {
    return Promise.resolve({
      deleted: true,
    })
  }
}

export class DbFindAllCompanyStub implements IFindAllCompany {
  async findAll(): Promise<IFindAllCompanyResult[]> {
    return Promise.resolve([
      {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company',
      },
      {
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        productConnection: [],
        name: 'company',
      },
    ])
  }
}

export class DbFindOneCompanyCompanyStub implements IFindOneCompany {
  async findOne(id: string): Promise<IFindOneCompanyResult> {
    return Promise.resolve({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      productConnection: [],
      name: 'company',
    })
  }
}

export class DbUpdateCompanyStub implements IUpdateCompany {
  async update(
    id: number,
    userId: string,
    data: IUpdateCompanyDTO
  ): Promise<IUpdateCompanyResult> {
    return Promise.resolve({ updated: true })
  }
}
