import { User } from '@/infra/db/typeorm/entities/User.entity'

export interface IAddUserDTO {
  email: string
  name: string
  password_hash: string
}

export interface ICreateUserRepository {
  create(data: IAddUserDTO): Promise<User>
}
