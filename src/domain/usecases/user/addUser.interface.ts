import { IAddUserDTO } from '@/data/protocols'
import { IUserModel } from '@/domain/models/user.interface'

export interface IAddUser {
  add(data: IAddUserDTO): Promise<IUserModel | null>
}
