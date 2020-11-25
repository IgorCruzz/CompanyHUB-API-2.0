import { IAddUserDTO } from '@/data/protocols'
import { User } from '@/infra/db/typeorm/entities/User.entity'

export interface IAddUser {
  add(data: IAddUserDTO): Promise<User | null>
}
