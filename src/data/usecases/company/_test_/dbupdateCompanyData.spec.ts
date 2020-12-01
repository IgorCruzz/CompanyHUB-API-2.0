import {
  FindByIdRepositoryStub,
  UpdateCompanyRepositoryStub,
} from '@/data/mocks/company.mock'
import { IFindByIdRepository } from '@/data/protocols/db/company/findByIdRepository.interface'
import { IUpdateCompanyRepository } from '@/data/protocols/db/company/updateCompanyRepository.interface'
import { IUpdateCompany } from '@/domain/usecases/company/updateCompany.interface'
import { DbUpdateCompany } from '../dbUpdateCompany.data'

let dbUpdateCompany: IUpdateCompany
let findByIdRepository: IFindByIdRepository
let updateCompanyRepository: IUpdateCompanyRepository

describe('DbUpdateCompany Data', () => {
  beforeEach(() => {
    findByIdRepository = new FindByIdRepositoryStub()
    updateCompanyRepository = new UpdateCompanyRepositoryStub()
    dbUpdateCompany = new DbUpdateCompany(
      findByIdRepository,
      updateCompanyRepository
    )
  })

  it('should be defined', () => {
    expect(dbUpdateCompany).toBeDefined()
  })

  it('should call findByIdRepository with success', async () => {
    const res = jest.spyOn(findByIdRepository, 'findId')

    await dbUpdateCompany.update(1, {
      name: 'company',
      cnpj: '111111111',
      user: '1',
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should returns an error message if findByIdRepository returns undefined', async () => {
    jest.spyOn(findByIdRepository, 'findId').mockResolvedValue(undefined)

    const res = await dbUpdateCompany.update(1, {
      name: 'company',
      cnpj: '111111111',
      user: '1',
    })

    expect(res).toEqual({ error: 'Insira um ID válido.' })
  })

  it('should returns an error message if company belongs to another user', async () => {
    const res = await dbUpdateCompany.update(2, {
      name: 'company',
      cnpj: '111111111',
      user: '2',
    })

    expect(res).toEqual({
      error: 'Você não tem permissão parar alterar dados de outra empresa.',
    })
  })

  it('should call updateCompanyRepository with success', async () => {
    const res = jest.spyOn(findByIdRepository, 'findId')

    await dbUpdateCompany.update(1, {
      name: 'company',
      cnpj: '111111111',
      user: '1',
    })

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should call updateCompanyRepository with success', async () => {
    const res = jest.spyOn(updateCompanyRepository, 'update')

    await dbUpdateCompany.update(1, {
      name: 'company',
      cnpj: '111111111',
      user: '1',
    })

    expect(res).toHaveBeenCalledWith(1, {
      cnpj: '111111111',
      name: 'company'
    })
  })
})
