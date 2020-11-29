import { IFindByIdRepository } from "@/data/protocols/db/company/findByIdRepository.interface";
import { IDbDeleteCompany, IDbDeleteCompanyDTO, IDbDeleteCompanyResult } from "@/domain/usecases/company/deleteCompany.interface";

export class DbDeleteCompany implements IDbDeleteCompany {
  constructor (
    private readonly findByIdRepository: IFindByIdRepository
  ) {}

  async delete (data: IDbDeleteCompanyDTO): Promise<IDbDeleteCompanyResult> {
    const { user } = data

    const userId = Number(user)

    const companyExists = await this.findByIdRepository.findId(userId)

    return null
  }

}
