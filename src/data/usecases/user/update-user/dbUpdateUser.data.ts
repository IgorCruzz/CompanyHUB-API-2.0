import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { IUpdateUserDTO, IUpdateUserRepository } from "@/data/protocols/db/user/updateUserRepository.interface";


export class DbUpdateUser implements IUpdateUserRepository {
  constructor (
    private readonly findUserByIdRepository: IFindUserByIdRepository,
  ) {}

  async update (id: number, data: IUpdateUserDTO): Promise<boolean> {

    const user = await this.findUserByIdRepository.findId(id)

    if(!user) return null

    return true
  }

}
