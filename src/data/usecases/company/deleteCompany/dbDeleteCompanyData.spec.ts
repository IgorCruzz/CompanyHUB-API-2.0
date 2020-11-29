import { FindByIdRepositoryStub } from "@/data/mocks/company.mock";
import { MockUserFindByIdRepository } from "@/data/mocks/user.mock";
import { IFindByIdRepository } from "@/data/protocols/db/company/findByIdRepository.interface";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { IDbDeleteCompany } from "@/domain/usecases/company/deleteCompany.interface";
import { DbDeleteCompany } from "./dbDeleteCompany.data";

let dbDeleteCompany: IDbDeleteCompany
let findByIdRepository: IFindByIdRepository
let userFindIdRepository: IFindUserByIdRepository

describe('dbDeleteCompany Data', () => {
  beforeEach(() => {
    userFindIdRepository = MockUserFindByIdRepository()
    findByIdRepository = new FindByIdRepositoryStub()
    dbDeleteCompany = new DbDeleteCompany(findByIdRepository, userFindIdRepository)
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

    it('should returns an error message if findByIdRepository return an user', async () => {
      jest.spyOn(findByIdRepository, 'findId').mockResolvedValue(undefined)

      const res =   await dbDeleteCompany.delete({
        params: { id: "1" },
        user: "1"
      })

      expect(res).toEqual({ error: 'Não existe uma empresa com este ID.'})
    })

    it('should be able to call userFindIdRepository with success', async () => {

      const res = jest.spyOn(userFindIdRepository, 'findId')

      await dbDeleteCompany.delete({
        params: { id: "1" },
        user: "1"
      })

     expect(res).toHaveBeenCalledWith(1)
    })

});
