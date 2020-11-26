import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { MockUserFindByIdRepository } from "@/data/__mocks__/user.mock";
import { IUpdateUser } from "@/domain/usecases/user/updateUser.interface"
import { DbUpdateUser } from "./dbUpdateUser.data";

let updateUserData: IUpdateUser
let userFindIdRepository: IFindUserByIdRepository

describe('UpdateUser Data', () => {
  beforeEach(() => {
    userFindIdRepository = MockUserFindByIdRepository()
    updateUserData = new DbUpdateUser(userFindIdRepository)
  })

  it('should be defined', () => {
    expect(updateUserData).toBeDefined()
  })

  it('should be able to call usersRepository with success', async () => {

    const res = jest.spyOn(userFindIdRepository, 'findId')

    await updateUserData.update(1, { name: 'name' })

   expect(res).toHaveBeenCalledWith(1)
  })

  it('return null if usersRepository returns undefined', async () => {
    jest.spyOn(userFindIdRepository, 'findId').mockResolvedValue(undefined)

    const res = await updateUserData.update(1, { name: 'name' })

    expect(res).toBeNull()

  })

});
