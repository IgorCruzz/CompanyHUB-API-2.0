import { IUserModel } from '@/domain/models/user.interface'

export interface IFindUserByEmailRepository {
  findEmail(email: string): Promise<IUserModel>
}
