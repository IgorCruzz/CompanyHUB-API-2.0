import { IAddCompany, IAddCompanyDTO, IAddCompanyResult } from '@/domain/usecases/company/addCompany.interface'
import { IDbDeleteCompany, IDbDeleteCompanyDTO, IDbDeleteCompanyResult } from '@/domain/usecases/company/deleteCompany.interface'

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
