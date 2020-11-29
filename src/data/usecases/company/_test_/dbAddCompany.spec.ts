import { CreateCompanyRepositoryStub, FindCnpjRepositoryStub, FindUserIdRepositorytub } from "@/data/mocks/company.mock";
import { ICreateCompanyRepository } from "@/data/protocols/db/company/createCompanyRepository";
import { IFindCnpjRepository } from "@/data/protocols/db/company/findCnpjRepository.interface";
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IAddCompany } from "@/domain/usecases/company/addCompany.interface";
import { DbAddCompany } from "../dbAddCompany.data";

let dbAddCompanyData: IAddCompany
let findUserIdRepository: IFindUserIdRepository
let findCnpjRepository: IFindCnpjRepository
let createCompanyRepository: ICreateCompanyRepository

describe('DbAddCompany Data', () => {
  beforeEach(() => {
    findUserIdRepository = new FindUserIdRepositorytub()
    findCnpjRepository = new FindCnpjRepositoryStub()
    createCompanyRepository = new CreateCompanyRepositoryStub()
    dbAddCompanyData = new DbAddCompany(findUserIdRepository, findCnpjRepository, createCompanyRepository )
  })

  it('should be defined', () => {
    expect(dbAddCompanyData).toBeDefined()
  })

  it('should call FindUserIdRepository with success', async () => {
    const res = jest.spyOn(findUserIdRepository, 'findUserId')

    await dbAddCompanyData.add({
      name: 'company',
      cnpj: '11111111111',
      user: "1"
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if FindUserIdRepository return an user', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId')

    const res = await dbAddCompanyData.add({
      name: 'company',
      cnpj: '11111111111',
      user: "1"
    })

    expect(res).toEqual({ error: 'Você já possui uma empresa cadastrada' })
  })

  it('should call FindCnpjRepository with success', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId').mockResolvedValue(undefined)

    const res = jest.spyOn(findCnpjRepository, 'findCnpj')

    await dbAddCompanyData.add({
      name: 'company',
      cnpj: '11111111111',
      user: "1"
    })

    expect(res).toHaveBeenCalledWith('11111111111')
  })

  it('should returns an error message if FindCnpjRepository not return an user', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId').mockResolvedValue(undefined)

    const res = await dbAddCompanyData.add({
      name: 'company',
      cnpj: '11111111111',
      user: "1"
    })

    expect(res).toEqual({ error: 'Já existe uma empresa cadastrada com esse cnpj' })
  })

  it('should call CreateCompanyRepository with success', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId').mockResolvedValue(undefined)
    jest.spyOn(findCnpjRepository, 'findCnpj').mockResolvedValue(undefined)
    const res = jest.spyOn(createCompanyRepository, 'create')

    await dbAddCompanyData.add({
      name: 'company',
      cnpj: '11111111111',
      user: "1"
    })

    expect(res).toHaveBeenCalledWith({cnpj: "11111111111", name: "company", user_id: 1})
  })

  it('should be return a Company registered', async () => {
    jest.spyOn(findUserIdRepository, 'findUserId').mockResolvedValue(undefined)
    jest.spyOn(findCnpjRepository, 'findCnpj').mockResolvedValue(undefined)

    const res =  await dbAddCompanyData.add({
      name: 'company',
      cnpj: '11111111111',
      user: "1"
    })

    expect(res).toEqual({
      user_id: 1,
      cnpj: '11111111111',
      id: 1,
      name: 'company'
    })
  })
});
