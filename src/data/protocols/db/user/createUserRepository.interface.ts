import { IAddUserDTO } from "@/domain/usecases/user/addUser.interface";
import { User } from "@/infra/db/typeorm/entities/User.entity";

export interface ICreateUserRepository {
  create (data: IAddUserDTO): Promise<User>
}
