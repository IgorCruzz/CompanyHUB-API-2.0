import { FindAllCompaniesRepositoryStub } from '@/data/mocks/company.mock'
import { IFindAllCompaniesRepository } from '@/data/protocols/db/company/findAllCompanies.repository'
import { IFindAllCompany } from '@/domain/usecases/company/findAllCompanies.interface'
import { DbFindAllCompany } from '../dbFindAllCompany.data'

let dbFindAllCompany: IFindAllCompany
let findAllCompaniesRepository: IFindAllCompaniesRepository

describe('Name of the group', () => {
  beforeEach(() => {
    findAllCompaniesRepository = new FindAllCompaniesRepositoryStub()
    dbFindAllCompany = new DbFindAllCompany(findAllCompaniesRepository)
  })

  it('should be defined', () => {
    expect(dbFindAllCompany).toBeDefined()
  })

  it('should call IFindAllCompaniesRepository with success', async () => {
    const res = jest.spyOn(findAllCompaniesRepository, 'findAll')

    await dbFindAllCompany.findAll()

    expect(res).toHaveBeenCalled()
  })
})
