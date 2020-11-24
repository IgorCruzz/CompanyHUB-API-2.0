import { IFindUserByEmailRepository } from '@/data/protocols/db/user/findUserRepository.inteface'
import { ISaveUserRepository } from '@/data/protocols/db/user/saveUserRepository.interface'
import { IAddUserDTO } from '@/domain/usecases/user/addUser'
import { Repository } from 'typeorm'
import { User } from '../../entities/User.entity'

export class UserRepository implements
IFindUserByEmailRepository,
ISaveUserRepository {
  constructor (
    private readonly userRepository: Repository<User>
  ) {}

  async findUserByEmail (email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email }
    })
  }

  async saveUser (data: IAddUserDTO): Promise<User> {
    return await this.userRepository.save(data)
  }
}
