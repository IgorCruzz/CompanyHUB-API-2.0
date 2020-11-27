import { IUser } from '@/domain/models/user.interface'
import { IAddUser, IAddUserDTO } from '@/domain/usecases/user/addUser.interface'
import { IDeleteResult, IDeleteUser } from '@/domain/usecases/user/deleteUser.interface'
import { IUpdateResult, IUpdateUser, IUpdateUserDTO } from '@/domain/usecases/user/updateUser.interface'

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
    async delete (id: number): Promise<IDeleteResult> {
      return Promise.resolve({ deleted: true })
    }
  }
  return new DbDeleteUserStub()
}

export const mockUpdateUser = (): IUpdateUser => {
  class DbUpdateUserStub implements IUpdateUser {
    async update (id: number, data: IUpdateUserDTO): Promise<IUpdateResult> {
      return Promise.resolve({ updated: true })
    }
  }
  return new DbUpdateUserStub()
}
