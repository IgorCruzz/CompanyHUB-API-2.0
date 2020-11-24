import { IAddUserDTO } from "@/domain/usecases/user/addUser";
import { User } from "@/infra/db/typeorm/entities/User.entity"

export interface ISaveUserRepository {
  saveUser(data: IAddUserDTO): Promise<User>
}