import { IFindOneCompanyRepository } from "@/data/protocols/db/company/findOneCompanyRepository.interface";
import { IUpdateCompanyRepository } from "@/data/protocols/db/company/updateCompanyRepository.interface";
import { IUpdateCompany, IUpdateCompanyDTO, IUpdateCompanyResult } from "@/domain/usecases/company/updateCompany.interace";

export class DbUpdateCompany implements IUpdateCompany {
  constructor (
    private readonly findOneCompanyRepository: IFindOneCompanyRepository,
    private readonly updateCompanyRepository: IUpdateCompanyRepository
  ) {}

  async update (id: number, data: IUpdateCompanyDTO): Promise<IUpdateCompanyResult> {
    const findCompany = await this.findOneCompanyRepository.findOne(Number(id))

    if(!findCompany) return { error: 'Você não cadastrou sua empresa ainda.' }

    if (Number(data.user) !== findCompany.user_id) return  { error: 'Você não tem permissão parar alterar dados de outra empresa.' }

    const request = JSON.stringify(data).toLowerCase()

    const updated = await this.updateCompanyRepository.update(id, JSON.parse(request))

    return { updated }
  }
}
