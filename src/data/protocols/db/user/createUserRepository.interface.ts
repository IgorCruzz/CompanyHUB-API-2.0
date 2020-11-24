import { User } from "@/infra/db/typeorm/entities/User.entity";

export interface ICreateUserRepository {
  create (data: any): Promise<User>
}
