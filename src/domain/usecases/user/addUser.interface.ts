import { IUser } from '@/domain/models/user.interface'

export interface IAddUserDTO {
  email: string
  name: string
  password_hash: string
}

export interface IAddUser {
  add (data: IAddUserDTO): Promise<IUser | null>
}
