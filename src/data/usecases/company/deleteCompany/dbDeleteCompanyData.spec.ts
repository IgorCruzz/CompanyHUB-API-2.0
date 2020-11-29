import { DeleteUserRepositoryStub, FindByIdRepositoryStub } from "@/data/mocks/company.mock";
import { IDeleteCompanyRepository } from "@/data/protocols/db/company/deleteCompanyRepository.interface";
import { IFindByIdRepository } from "@/data/protocols/db/company/findByIdRepository.interface";
import { IDbDeleteCompany } from "@/domain/usecases/company/deleteCompany.interface";
import { DbDeleteCompany } from "./dbDeleteCompany.data";

let dbDeleteCompany: IDbDeleteCompany
let findByIdRepository: IFindByIdRepository
let deleteCompanyRepository: IDeleteCompanyRepository

describe('dbDeleteCompany Data', () => {
  beforeEach(() => {
    deleteCompanyRepository = new DeleteUserRepositoryStub()
    findByIdRepository = new FindByIdRepositoryStub()
    dbDeleteCompany = new DbDeleteCompany(findByIdRepository, deleteCompanyRepository)
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

    it('should returns an error message if findByIdRepository return undefined', async () => {
      jest.spyOn(findByIdRepository, 'findId').mockResolvedValue(undefined)

      const res =   await dbDeleteCompany.delete({
        params: { id: "1" },
        user: "1"
      })

      expect(res).toEqual({ error: 'Não existe uma empresa com este ID.'})
    })

    it('should returns an error message if an user try to delete a company that belongs to other user', async () => {

      const res =   await dbDeleteCompany.delete({
        params: { id: "1" },
        user: "2"
      })

      expect(res).toEqual({ error: 'Você não tem permissão parar alterar dados de outra empresa.'})
    })

    it('should call deleteCompanyRepository with success', async () => {
      const res = jest.spyOn(deleteCompanyRepository, 'delete')

      await dbDeleteCompany.delete({
        params: { id: "1" },
        user: "1"
      })

      expect(res).toHaveBeenCalledWith(1)
    })
});
