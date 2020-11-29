import { IDbFindAllCompany } from "@/domain/usecases/company/findAllCompanies.interface";
import { DbFindAllCompany } from "./dbFindAllCompany.data";


let dbFindAllCompany: IDbFindAllCompany


describe('Name of the group', () => {
  beforeEach(() => {
    dbFindAllCompany = new DbFindAllCompany()
  })

  it('should be defined', () => {
    expect(dbFindAllCompany).toBeDefined()
  })
});
