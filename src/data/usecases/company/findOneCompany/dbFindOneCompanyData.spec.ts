import { FindOneCompanyRepositoryStub } from "@/data/mocks/company.mock";
import { IFindOneCompanyRepository } from "@/data/protocols/db/company/findOneCompanyRepository.interface";
import { IDbFindOneCompany } from "@/domain/usecases/company/findOneCompany.interface";
import { DbFindOneCompany } from "./dbFindOneCompany.data";


let dbFindOneCompany: IDbFindOneCompany
let findOneCompanyRepository: IFindOneCompanyRepository


describe('DbFindOneCompany Data', () => {
  beforeEach(() => {
    findOneCompanyRepository = new FindOneCompanyRepositoryStub()
    dbFindOneCompany = new DbFindOneCompany(findOneCompanyRepository)
  })

  it('should be defined', () => {
    expect(dbFindOneCompany).toBeDefined()
  })

  it('should call findOneCompanyRepository with success', async () => {
    const res = jest.spyOn(findOneCompanyRepository, 'findOne')

    await dbFindOneCompany.findOne("1")

    expect(res).toHaveBeenCalledWith(1)
  })
});
