import { IUser } from "@/domain/models/user.interface";

export interface IFindUserByIdRepository {
  findId (id: number): Promise<IUser>
}
