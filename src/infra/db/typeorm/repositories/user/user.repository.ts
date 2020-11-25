import { ICreateUserRepository } from '@/data/protocols/db/user/createUserRepository.interface'
import { IFindUserByEmailRepository } from '@/data/protocols/db/user/findUserRepository.inteface'
import { IAddUserDTO } from '@/domain/usecases/user/addUser.interface'
import { getRepository } from 'typeorm'
import { User } from '../../entities/User.entity'

export class UserRepository implements
IFindUserByEmailRepository,
ICreateUserRepository {
  async findEmail (email: string): Promise<User | undefined> {
    const orm = getRepository(User)
    return await orm.findOne({
      where: { email }
    })
  }

  async create (data: IAddUserDTO): Promise<User> {
    const orm = getRepository(User)

    return orm.save(data)
  }
}