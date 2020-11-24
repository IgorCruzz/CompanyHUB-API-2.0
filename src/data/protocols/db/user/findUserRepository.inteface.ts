import { User } from "@/infra/db/typeorm/entities/User.entity";

export interface IFindUserByEmailRepository {
   findUserByEmail (email: string): Promise<User> 
}