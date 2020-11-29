import { IFindOneCompanyRepository } from "@/data/protocols/db/company/findOneCompanyRepository.interface";
import { IDbFindOneCompany, IDbFindOneCompanyResult } from "@/domain/usecases/company/findOneCompany.interface";


export class DbFindOneCompany implements IDbFindOneCompany {
  constructor (
    private readonly findOneCompanyRepository: IFindOneCompanyRepository
  ) {}

  async findOne(id: string): Promise<IDbFindOneCompanyResult> {
    const company = await this.findOneCompanyRepository.findOne(Number(id))

    return company
  }

}
