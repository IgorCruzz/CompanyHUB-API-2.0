import { IDbDeleteCompany } from "@/domain/usecases/company/deleteCompany.interface";
import { DbDeleteCompany } from "./dbDeleteCompany.data";

let dbDeleteCompany: IDbDeleteCompany

describe('dbDeleteCompany Data', () => {
  beforeEach(() => {
    dbDeleteCompany = new DbDeleteCompany()
  })

    it('should be defined', () => {
      expect(dbDeleteCompany).toBeDefined()
    })
});
