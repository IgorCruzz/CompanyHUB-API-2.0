import { IDeleteUserRepository } from "@/data/protocols/db/user/deleteUserRepository.interface";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { MockUserDeleteRepository, MockUserFindByIdRepository } from "@/data/mocks/user.mock";
import { IDeleteUser } from "@/domain/usecases/user/deleteUser.interface";
import { DbDeleteUser } from "../dbDeleteUser.data";

let dbDeleteUser: IDeleteUser
let userFindIdRepository: IFindUserByIdRepository
let userDeleteRepository: IDeleteUserRepository

describe('DbDeleteUser', () => {
  beforeEach(() => {
    userFindIdRepository = MockUserFindByIdRepository()
    userDeleteRepository = MockUserDeleteRepository()
    dbDeleteUser = new DbDeleteUser(
      userFindIdRepository,
      userDeleteRepository)
  })

  it('should be defined', async () => {
    expect(DbDeleteUser).toBeDefined()
  })

  it('should be able to call IFindUserByIdRepository with success', async () => {
    const res = jest.spyOn(userFindIdRepository, 'findId')

     await dbDeleteUser.delete(1)

    expect(res).toHaveBeenCalledWith(1)
  })

   it('return null if IFindUserByIdRepository not find a user with ID passed on request', async () => {
    jest.spyOn(userFindIdRepository, 'findId').mockResolvedValue(undefined)

    const res = await dbDeleteUser.delete(1)

    expect(res).toEqual({ error: 'Não existe um usuário com este ID'})
  })

  it('should be able to call IDeleteUserRepository with success', async () => {
    const res = jest.spyOn(userDeleteRepository, 'delete')

    await dbDeleteUser.delete(1)

    expect(res).toHaveBeenCalledWith(1)
  })
});
