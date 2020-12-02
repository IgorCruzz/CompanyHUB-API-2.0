import { IFindAllCompany } from '@/domain/usecases/company/findAllCompanies.interface'
import { DbFindAllCompanyStub } from '@/presentation/mocks/company.mock'
import { IController } from '@/presentation/protocols'
import { FindAllCompanyController } from '../findAllCompany.controller'

let findAllCompanyController: IController
let DbFindAllCompany: IFindAllCompany

describe('DeleteCompany Controller', () => {
  beforeEach(() => {
    DbFindAllCompany = new DbFindAllCompanyStub()
    findAllCompanyController = new FindAllCompanyController(DbFindAllCompany)
  })

  it('should be defined', () => {
    expect(findAllCompanyController).toBeDefined()
  })

  it('return status 200 if DbFindAllCompany returns', async () => {
    const res = await findAllCompanyController.handle({})

    expect(res).toEqual({
      status: 200,
      body: [
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
      ],
    })
  })

  it('return status 500 if DbFindAllCompany throws', async () => {
    jest.spyOn(DbFindAllCompany, 'findAll').mockRejectedValue(new Error())

    const res = await findAllCompanyController.handle({})

    expect(res).toEqual({
      status: 500,
      body: new Error(),
    })
  })
})
