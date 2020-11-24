import { User } from "@/infra/db/typeorm/entities/User.entity"


export interface ISaveUserRepository {
  saveUser(data: {
    email: string,
    name: string,
    password_hash: string
  }): Promise<User>
}