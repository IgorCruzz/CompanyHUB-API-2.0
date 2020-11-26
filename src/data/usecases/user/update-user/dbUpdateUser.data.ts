import { IFindUserByEmailRepository } from "@/data/protocols";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { IUpdateUserDTO, IUpdateUserRepository } from "@/data/protocols/db/user/updateUserRepository.interface";


export class DbUpdateUser implements IUpdateUserRepository {
  constructor (
    private readonly findUserByIdRepository: IFindUserByIdRepository,
    private readonly findUserByEmailRepo: IFindUserByEmailRepository,

  ) {}

  async update (id: number, data: IUpdateUserDTO): Promise<boolean> {
    const { email } = data

    const user = await this.findUserByIdRepository.findId(id)

    if(!user) return null

    if(user.email !== email) {
      return await this.findUserByEmailRepo.findEmail(email) && null
    }

    return true
  }

}
