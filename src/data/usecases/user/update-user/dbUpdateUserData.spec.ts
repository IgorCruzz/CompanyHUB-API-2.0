import { IFindUserByEmailRepository, IHasher } from "@/data/protocols";
import { ICompare } from "@/data/protocols/bcryptAdapter/ICompare.interface";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { IUpdateUserRepository } from "@/data/protocols/db/user/updateUserRepository.interface";
import { mockCompare, mockHasher } from "@/data/__mocks__/bcrypt.mock";
import { MockUserFindByEmailRepository, MockUserFindByIdRepository, MockUserUpdateRepository } from "@/data/__mocks__/user.mock";
import { IUpdateUser } from "@/domain/usecases/user/updateUser.interface";
import { DbUpdateUser } from "./dbUpdateUser.data";

let updateUserData: IUpdateUser
let userFindIdRepository: IFindUserByIdRepository
let userFindByEmailRepository: IFindUserByEmailRepository
let userUpdateRepository: IUpdateUserRepository
let bcryptCompare: ICompare
let bcryptHasher: IHasher


describe('UpdateUser Data', () => {
  beforeEach(() => {
    userFindIdRepository = MockUserFindByIdRepository()
    userFindByEmailRepository = MockUserFindByEmailRepository()
    userUpdateRepository = MockUserUpdateRepository()
    bcryptCompare = mockCompare()
    bcryptHasher = mockHasher()
    updateUserData = new DbUpdateUser(
      userFindIdRepository,
      userFindByEmailRepository,
      userUpdateRepository,
      bcryptCompare,
      bcryptHasher)
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

  it('return null if userFindByEmailRepository return an user with email passed on request', async () => {
    jest.spyOn(userFindByEmailRepository, 'findEmail').mockResolvedValue({
      id: 1,
      email: 'other@mail.com',
      name: 'name',
      password_hash: 'hashed_password'
    })

    const res = await updateUserData.update(1, { name: 'name', email: 'other@mail.com' })

    expect(res).toBeNull()
  })

  it('should be able to call mockCompare with success', async () => {

    const res = jest.spyOn(bcryptCompare, 'compare')

    await updateUserData.update(1,
        { name: 'name',
          email: 'user@mail.com',
          oldPassword: 'password',
          password: 'password',
          confirmPassword: 'password' })

    expect(res).toHaveBeenCalledWith('password', 'password')
  } )

  it('should return null if mockCompare returns false', async () => {
    jest.spyOn(bcryptCompare, 'compare').mockResolvedValue(false)

    const res = await updateUserData.update(1,
      { name: 'name',
        email: 'user@mail.com',
        oldPassword: 'password',
        password: 'password',
        confirmPassword: 'password' })

    expect(res).toBeNull()
  })

  it('should be able to call to UpdateUserRepository with success', async () => {
    const res = jest.spyOn(userUpdateRepository, 'update')

    await updateUserData.update(1, { name: 'name_changed' })

    expect(res).toHaveBeenCalledWith(1, { name: 'name_changed' })
  })

  it('should be able to call to UpdateUserRepository and changed the password', async () => {
    const res = jest.spyOn(userUpdateRepository, 'update')

    await updateUserData.update(1,
      {
        oldPassword: 'password',
        password: 'newPassword',
        confirmPassword: 'newPassword'
      })

    expect(res).toBeTruthy()
  })

});
