import { IAddUser, IAddUserDTO } from '@/domain/usecases/user/addUser.interface'
import {
  IDeleteResult,
  IDeleteUser
} from '@/domain/usecases/user/deleteUser.interface'
import {
  IUpdateResult,
  IUpdateUser,
  IUpdateUserDTO
} from '@/domain/usecases/user/updateUser.interface'

export class DbAddUserStub implements IAddUser {
  async add (data: IAddUserDTO): Promise<any> {
    return Promise.resolve({
      id: 1,
      name: 'name',
      email: 'user@mail.com'
    })
  }
}

export class DbDeleteUserStub implements IDeleteUser {
  async delete (id: number): Promise<IDeleteResult> {
    return Promise.resolve({ deleted: true })
  }
}

export class DbUpdateUserStub implements IUpdateUser {
  async update (id: number, userId: string, data: IUpdateUserDTO): Promise<IUpdateResult> {
    return Promise.resolve({ updated: true })
  }
}
