import { IFindOneCompanyRepository } from "@/data/protocols/db/company/findOneCompanyRepository.interface";
import { IDbFindOneCompany, IDbFindOneCompanyResult } from "@/domain/usecases/company/findOneCompany.interface";


export class DbFindOneCompany implements IDbFindOneCompany {
  constructor (
    private readonly findOneCompanyRepository: IFindOneCompanyRepository
  ) {}

  async findOne(id: string): Promise<IDbFindOneCompanyResult> {
    const findCompany = await this.findOneCompanyRepository.findOne(Number(id))

    if(!findCompany) return { error: 'Você não cadastrou sua empresa ainda.' }

    const { created_at, updated_at, ...company } = findCompany

    return company
  }
}
