import { IFindOneCompanyRepository } from "@/data/protocols/db/company/findOneCompanyRepository.interface";
import { IUpdateCompany, IUpdateCompanyDTO, IUpdateCompanyResult } from "@/domain/usecases/company/updateCompany.interace";

export class DbUpdateCompany implements IUpdateCompany {
  constructor (
    private readonly findOneCompanyRepository: IFindOneCompanyRepository
  ) {}

  async update (id: number, data: IUpdateCompanyDTO): Promise<IUpdateCompanyResult> {
    const findCompany = await this.findOneCompanyRepository.findOne(Number(id))

    if(!findCompany) return { error: 'Você não cadastrou sua empresa ainda.' }


    return await null
  }
}
