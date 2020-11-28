import { IAddCompany, IAddCompanyDTO, IAddCompanyResult } from '@/domain/usecases/company/addCompany.interface'

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
