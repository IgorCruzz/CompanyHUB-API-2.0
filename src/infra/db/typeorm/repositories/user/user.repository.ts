import { IFindUserByEmailRepository } from '@/data/protocols/db/user/findUserRepository.inteface'
import { ISaveUserRepository } from '@/data/protocols/db/user/saveUserRepository.interface'
import { getRepository } from 'typeorm'
import { User } from '../../entities/User.entity'

export class UserRepository implements
IFindUserByEmailRepository,
ISaveUserRepository {
  async findUserByEmail (email: string): Promise<User> {
    const orm = getRepository(User)
    return await orm.findOne({
      where: { email }
    })
  }

  async saveUser (data: any): Promise<User> {
    const orm = getRepository(User)

    return await orm.save(data)
  }
}
