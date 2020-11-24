import { IAddUserDTO } from "@/domain/usecases/user/addUser.interface";
import { User } from "@/infra/db/typeorm/entities/User.entity"

export interface ISaveUserRepository {
  saveUser(data: IAddUserDTO): Promise<User>
}
