import { IUserModel } from '@/domain/models/user.interface'

export interface IAddUserDTO {
  email: string
  name: string
  password_hash: string
}

export interface ICreateUserRepository {
  create(data: IAddUserDTO): Promise<IUserModel>
}
