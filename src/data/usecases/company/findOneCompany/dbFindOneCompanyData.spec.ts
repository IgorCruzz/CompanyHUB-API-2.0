import { IDbFindOneCompany } from "@/domain/usecases/company/findOneCompany.interface";
import { DbFindOneCompany } from "./dbFindOneCompany.data";


let dbFindOneCompany: IDbFindOneCompany


describe('DbFindOneCompany Data', () => {
  beforeEach(() => {
    dbFindOneCompany = new DbFindOneCompany()
  })

  it('should be defined', () => {
    expect(dbFindOneCompany).toBeDefined()
  })
});
