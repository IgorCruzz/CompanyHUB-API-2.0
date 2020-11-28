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

});
