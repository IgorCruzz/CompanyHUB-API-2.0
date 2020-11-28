import { Company } from "@/infra/db/typeorm/entities/Company.entity"
import { ICreateCompanyDTO, ICreateCompanyRepository } from "../protocols/db/company/createCompanyRepository"
import { IFindCnpjRepository } from "../protocols/db/company/findCnpjRepository.interface"
import { IFindUserIdRepository } from "../protocols/db/company/findUserIdRepository.interface"

export const MockfindUserIdRepository = (): IFindUserIdRepository => {
  class FindUserIdRepositorytub  implements IFindUserIdRepository {

    async findUserId (id: number): Promise<Company> {
      return Promise.resolve({
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        name: 'company',
        created_at: new Date(),
        updated_at: new Date()
      })
    }
}
  return new FindUserIdRepositorytub()
}

export const MockCnpjRepository = (): IFindCnpjRepository => {
  class FindCnpjRepositoryStub  implements IFindCnpjRepository {

    async findCnpj (cnpj: string): Promise<Company> {
      return  Promise.resolve({
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        name: 'company',
        created_at: new Date(),
        updated_at: new Date()
      })
    }
}
  return new FindCnpjRepositoryStub()
}

export const MockCreateCompanyRepository = (): ICreateCompanyRepository => {
  class CreateCompanyRepositoryStub  implements ICreateCompanyRepository {

    async create (date: ICreateCompanyDTO): Promise<Company> {

      return Promise.resolve({
        user_id: 1,
        cnpj: '11111111111',
        id: 1,
        name: 'company',
        created_at: new Date(),
        updated_at: new Date()
      })
    }
}
  return new CreateCompanyRepositoryStub()
}
