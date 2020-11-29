import { User } from "@/infra/db/typeorm/entities/User.entity";


export interface IFindUserByEmailRepository {
   findEmail (email: string): Promise<User>
}
