import { IAddUserDTO } from '@/data/protocols'
import { IUser } from '@/domain/models/user.interface'

export interface IAddUser {
  add(data: IAddUserDTO): Promise<IUser | null>
}
