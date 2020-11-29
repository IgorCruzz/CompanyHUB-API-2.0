import { IFindByIdRepository } from "@/data/protocols/db/company/findByIdRepository.interface";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { IDbDeleteCompany, IDbDeleteCompanyDTO, IDbDeleteCompanyResult } from "@/domain/usecases/company/deleteCompany.interface";

export class DbDeleteCompany implements IDbDeleteCompany {
  constructor (
    private readonly findByIdRepository: IFindByIdRepository,
    private readonly findUserByIdRepository: IFindUserByIdRepository,

  ) {}

  async delete (data: IDbDeleteCompanyDTO): Promise<IDbDeleteCompanyResult> {
    const { user, params } = data

    const findCompany = await this.findByIdRepository.findId(Number(params.id))

    if (!findCompany) return { error: 'Não existe uma empresa com este ID.'}

    const findUser = await this.findUserByIdRepository.findId(Number(user))

    if (findUser.id !== findCompany.user_id) return { error: 'Não existe uma empresa com este ID.'}

    return null
  }

}
