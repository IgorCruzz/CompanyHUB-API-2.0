import { User } from "@/infra/db/typeorm/entities/User.entity";


export interface IFindUserByIdRepository {
  findId (id: number): Promise<User>
}
