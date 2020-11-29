import { IUpdateCompany } from "@/domain/usecases/company/updateCompany.interace";
import { DbUpdateCompany } from "./updateCompany.data";

let dbUpdateCompany: IUpdateCompany

describe('DbUpdateCompany Data', () => {
  beforeEach(() => {
    dbUpdateCompany = new DbUpdateCompany()
  })

    it('should be defined', () => {
      expect(dbUpdateCompany).toBeDefined()
    })
});
