import { IAddUserDTO, ICreateUserRepository } from '../protocols/db/user/createUserRepository.interface'
import { IDeleteUserRepository } from '../protocols/db/user/deleteUserRepository.interface'
import { IFindUserByIdRepository } from '../protocols/db/user/findUserByIdRepository.interface'
import { IFindUserByEmailRepository } from '../protocols/db/user/findUserRepository.inteface'
import {
  IUpdateUserDTO,
  IUpdateUserRepository,
} from '../protocols/db/user/updateUserRepository.interface'

export class UserFindByEmailRepositoryStub implements IFindUserByEmailRepository {
  async findEmail(email: string): Promise<any> {
    return Promise.resolve({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class UserRepositoryStub implements ICreateUserRepository {
  async create(data: IAddUserDTO): Promise<any> {
    return Promise.resolve({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class UserFindByIdRepositoryStub implements IFindUserByIdRepository {
  async findId(id: number): Promise<any> {
    return Promise.resolve({
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      password_hash: 'hashed_password',
      administrator: false,
      activation: false,
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class DeleteUserRepositoryStub implements IDeleteUserRepository {
  async delete(id: number): Promise<boolean> {
    return Promise.resolve(true)
  }
}

export class UpdateUserRepositoryStub implements IUpdateUserRepository {
  update(id: number, data: IUpdateUserDTO): Promise<boolean> {
    return Promise.resolve(true)
  }
}
