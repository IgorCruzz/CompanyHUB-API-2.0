import { ICreateCompanyRepository } from "@/data/protocols/db/company/createCompanyRepository";
import { IFindCnpjRepository } from "@/data/protocols/db/company/findCnpjRepository.interface";
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IAddCompany, IAddCompanyDTO, IAddCompanyResult } from "@/domain/usecases/company/addCompany.interface";

export class DbAddCompany implements IAddCompany {
  constructor (
    private readonly FindUserIdRepository: IFindUserIdRepository,
    private readonly FindCnpjRepository: IFindCnpjRepository,
    private readonly CreateCompanyRepository: ICreateCompanyRepository,
   ) {}

  async add (data: IAddCompanyDTO): Promise<IAddCompanyResult> {
    const { name } = data

    const company = await this.FindUserIdRepository.findUserId(Number(data.user))

    if (company) return { error: 'Você já possui uma empresa cadastrada' }

    const cnpjFormat = data.cnpj
    .split('.')
    .join('')
    .split('/')
    .join('')
    .split('-')
    .join('')

    const companyCnpj = await this.FindCnpjRepository.findCnpj(cnpjFormat)

    if (companyCnpj) return { error: 'Já existe uma empresa cadastrada com esse cnpj' }

    const companyCreate =  await this.CreateCompanyRepository.create({
      name: name.toLowerCase().trim(),
      cnpj: cnpjFormat,
      user_id: Number(data.user),
    })

    return {
      user_id: companyCreate.user_id,
      cnpj: companyCreate.cnpj,
      id: companyCreate.id,
      name: companyCreate.name
    }
  }
}
