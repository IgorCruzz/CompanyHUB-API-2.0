import { IAddUserDTO, ICreateUserRepository, IFindUserByEmailRepository } from '@/data/protocols'
import { IFindUserByIdRepository } from '@/data/protocols/db/user/findUserByIdRepository.interface'
import { IUser } from '@/domain/models/user.interface'
import { getRepository } from 'typeorm'
import { User } from '../../entities/User.entity'

export class UserRepository implements
IFindUserByEmailRepository,
ICreateUserRepository,
IFindUserByIdRepository {
  async findEmail (email: string): Promise<User | undefined> {
    const orm = getRepository(User)
    return await orm.findOne({
      where: { email }
    })
  }

  async findId (id: number): Promise<IUser> {
    const orm = getRepository(User)

    return await orm.findOne({ id })
  }

  async create (data: IAddUserDTO): Promise<User> {
    const orm = getRepository(User)

    return orm.save(data)
  }

  async delete (id: number): Promise<boolean> {
    const orm = getRepository(User)

    const deleteUser = await orm.delete(id)

    return deleteUser && true
  }
}
