import { IUser } from '@/domain/models/user.interface'
import { IAddUser, IAddUserDTO } from '@/domain/usecases/user/addUser.interface'

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
