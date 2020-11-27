import { IUser } from "@/domain/models/user.interface";
import { IAddUserDTO, ICreateUserRepository, IFindUserByEmailRepository } from "../protocols";
import { IDeleteUserRepository } from "../protocols/db/user/deleteUserRepository.interface";
import { IFindUserByIdRepository } from "../protocols/db/user/findUserByIdRepository.interface";
import { IUpdateUserDTO, IUpdateUserRepository } from "../protocols/db/user/updateUserRepository.interface";

export const MockUserFindByEmailRepository = (): IFindUserByEmailRepository => {
  class UserFindByEmailRepositoryStub  implements IFindUserByEmailRepository {

  async findEmail (email: string): Promise<IUser | undefined> {

    return Promise.resolve({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date()
    })
  }
}
  return new UserFindByEmailRepositoryStub()
}

export const MockUserCreateRepository = (): ICreateUserRepository => {
  class UserRepositoryStub  implements ICreateUserRepository {

    async create (data: IAddUserDTO): Promise<IUser> {
      return Promise.resolve({
        id: 1,
        name: 'user',
        email: 'user@mail.com',
        password_hash: 'hashed_password',
        administrator: false,
        activation: false,
        created_at: new Date(),
        updated_at: new Date()
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
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date()
    })
    }
}
  return new UserFindByIdRepositoryStub()
}

export const MockUserDeleteRepository = (): IDeleteUserRepository => {
  class DeleteUserRepositoryStub  implements IDeleteUserRepository {

    async delete (id: number): Promise<boolean> {
      return Promise.resolve(true)
    }
}
  return new DeleteUserRepositoryStub()
}

export const MockUserUpdateRepository = (): IUpdateUserRepository => {
  class UpdateUserRepositoryStub  implements IUpdateUserRepository {

    update (id: number, data: IUpdateUserDTO): Promise<boolean> {
      return Promise.resolve(true)
    }
}
  return new UpdateUserRepositoryStub()
}



