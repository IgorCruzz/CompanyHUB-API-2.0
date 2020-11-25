import { IAddUserDTO, ICreateUserRepository, IFindUserByEmailRepository } from '@/data/protocols'
import { User } from '../../entities/User.entity'

export class FakeUserRepository implements
IFindUserByEmailRepository,
ICreateUserRepository {
  private readonly users: User[] = []

  public async findEmail (email: string): Promise<User | undefined> {
    return await this.users.find(user => user.email === email)
  }

  public async create (data: IAddUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: 1, created_at: new Date(), updated_at: new Date() }, data)

    this.users.push(user)

    return await user
  }
}
