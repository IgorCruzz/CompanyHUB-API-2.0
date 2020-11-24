import { User } from "@/infra/db/typeorm/entities/User.entity"

export interface ISaveUserRepository {
  saveUser(data: any): Promise<User>
}
