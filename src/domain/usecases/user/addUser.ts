import { User } from '@/infra/db/typeorm/entities/User.entity'

export interface IAddUserDTO {
  email: string
  name: string
  password: string
}

export interface IAddUser {
  add(data: IAddUserDTO): Promise<User>
}
