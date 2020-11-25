import { IUser } from '@/domain/models/user.interface'
import { IAddUser, IAddUserDTO } from '@/domain/usecases/user/addUser.interface'
import { IDeleteUser } from '@/domain/usecases/user/deleteUser.interface'

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
    async delete (id: number): Promise<any> {
      return Promise.resolve({})
    }
  }
  return new DbDeleteUserStub()
}
