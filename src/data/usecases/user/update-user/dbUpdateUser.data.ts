import { IUpdateUserDTO, IUpdateUserRepository } from "@/data/protocols/db/user/updateUserRepository.interface";


export class DbUpdateUser implements IUpdateUserRepository {
  async update (id: number, data: IUpdateUserDTO): Promise<boolean> {
    return Promise.resolve(null)
  }

}
