import { MockCnpjRepository, MockCreateCompanyRepository, MockfindUserIdRepository } from "@/data/mocks/company.mock";
import { ICreateCompanyRepository } from "@/data/protocols/db/company/createCompanyRepository";
import { IFindCnpjRepository } from "@/data/protocols/db/company/findCnpjRepository.interface";
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IAddCompany } from "@/domain/usecases/company/addCompany.interface";
import { DbAddCompany } from "./dbAddCompany.data";

let dbAddCompanyData: IAddCompany
let findUserIdRepository: IFindUserIdRepository
let findCnpjRepository: IFindCnpjRepository
let createCompanyRepository: ICreateCompanyRepository

describe('DbAddCompany Data', () => {
  beforeEach(() => {
    findUserIdRepository = MockfindUserIdRepository()
    findCnpjRepository = MockCnpjRepository()
    createCompanyRepository = MockCreateCompanyRepository()
    dbAddCompanyData = new DbAddCompany(findUserIdRepository, findCnpjRepository, createCompanyRepository )
  })

  it('should be defined', () => {
    expect(dbAddCompanyData).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbAddCompanyData.add({
      name: 'name',
      cnpj: '11111111111',
      user: 1
    })

    expect(res).toHaveBeenCalledWith(1)
  })

});
