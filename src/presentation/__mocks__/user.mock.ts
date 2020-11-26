import { IUser } from '@/domain/models/user.interface'
import { IAddUser, IAddUserDTO } from '@/domain/usecases/user/addUser.interface'
import { IDeleteUser } from '@/domain/usecases/user/deleteUser.interface'
import { IUpdateUser, IUpdateUserDTO } from '@/domain/usecases/user/updateUser.interface'

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

export const mockDeleteUser = (): IDeleteUser => {
  class DbDeleteUserStub implements IDeleteUser {
    async delete (id: number): Promise<boolean> {
      return Promise.resolve(true)
    }
  }
  return new DbDeleteUserStub()
}

export const mockUpdateUser = (): IUpdateUser => {
  class DbUpdateUserStub implements IUpdateUser {
    async update (id: number, data: IUpdateUserDTO): Promise<boolean> {
      return Promise.resolve(true)
    }
  }
  return new DbUpdateUserStub()
}
