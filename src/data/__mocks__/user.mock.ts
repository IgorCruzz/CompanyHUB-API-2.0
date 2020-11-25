import { IUser } from "@/domain/models/user.interface";
import { IAddUser } from "@/domain/usecases/user/addUser.interface";
import { IAddUserDTO, ICreateUserRepository, IFindUserByEmailRepository } from "../protocols";
import { IDeleteUserRepository } from "../protocols/db/user/deleteUserRepository.interface";
import { IFindUserByIdRepository } from "../protocols/db/user/findUserByIdRepository.interface";

export const MockAddUser = (): IAddUser => {
  class DbAddUserStub implements IAddUser {
    async add (data: IAddUserDTO): Promise<IUser | null> {
      return Promise.resolve({
        id: 1,
        name: 'name',
        email: 'user@mail.com'
      })
    }
  }
  return new DbAddUserStub()
}

export const MockUserFindByEmailRepository = (): IFindUserByEmailRepository => {
  class UserRepositoryStub  implements IFindUserByEmailRepository {

  async findEmail (email: string): Promise<IUser | undefined> {

    return Promise.resolve(undefined)
  }
}
  return new UserRepositoryStub()
}

export const MockUserCreateRepository = (): ICreateUserRepository => {
  class UserRepositoryStub  implements ICreateUserRepository {

    async create (data: IAddUserDTO): Promise<IUser> {
      return Promise.resolve({
        id: 1,
        name: 'name',
        email: 'user@mail.com'
      })
    }
}
  return new UserRepositoryStub()
}

export const MockUserFindByIdRepository = (): IFindUserByIdRepository => {
  class UserFindByIdRepositoryStub  implements IFindUserByIdRepository {

    async findId (id: number): Promise<IUser> {
    return Promise.resolve({
        id: 1,
        name: 'name',
        email: 'user@mail.com'
      })
    }
}
  return new UserFindByIdRepositoryStub()
}

export const MockUserDeleteRepository = (): IDeleteUserRepository => {
  class DeleteUserRepositoryStub  implements IDeleteUserRepository {

    async delete (id: number): Promise<any> {
    return Promise.resolve({ })
    }
}
  return new DeleteUserRepositoryStub()
}
