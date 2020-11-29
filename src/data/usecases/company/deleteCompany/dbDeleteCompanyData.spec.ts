import { FindByIdRepositoryStub } from "@/data/mocks/company.mock";
import { IFindByIdRepository } from "@/data/protocols/db/company/findByIdRepository.interface";
import { IDbDeleteCompany } from "@/domain/usecases/company/deleteCompany.interface";
import { DbDeleteCompany } from "./dbDeleteCompany.data";

let dbDeleteCompany: IDbDeleteCompany
let findByIdRepository: IFindByIdRepository

describe('dbDeleteCompany Data', () => {
  beforeEach(() => {
    findByIdRepository = new FindByIdRepositoryStub()
    dbDeleteCompany = new DbDeleteCompany(findByIdRepository)
  })

    it('should be defined', () => {
      expect(dbDeleteCompany).toBeDefined()
    })

    it('should call findByIdRepository with success', async () => {
      const res = jest.spyOn(findByIdRepository, 'findId')

      await dbDeleteCompany.delete({
        params: { id: "1" },
        user: "1"
      })

      expect(res).toHaveBeenCalledWith(1)
    })
});
