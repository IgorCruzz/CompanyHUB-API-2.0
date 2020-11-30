import { IFindByIdRepository } from '@/data/protocols/db/company/findByIdRepository.interface'
import { IUpdateCompanyRepository } from '@/data/protocols/db/company/updateCompanyRepository.interface'
import {
  IUpdateCompany,
  IUpdateCompanyDTO,
  IUpdateCompanyResult,
} from '@/domain/usecases/company/updateCompany.interface'

export class DbUpdateCompany implements IUpdateCompany {
  constructor(
    private readonly findByIdRepository: IFindByIdRepository,
    private readonly updateCompanyRepository: IUpdateCompanyRepository
  ) {}

  async update(
    id: number,
    data: IUpdateCompanyDTO
  ): Promise<IUpdateCompanyResult> {

    const findCompany = await this.findByIdRepository.findId(Number(id))

    if (!findCompany) return { error: 'Insira um ID válido.' }

    if (Number(data.user) !== findCompany.user_id)
      return {
        error: 'Você não tem permissão parar alterar dados de outra empresa.',
      }

    const request = JSON.stringify(data).toLowerCase()

    const { user, ...companyUpdatedData } = JSON.parse(request)

    const updated = await this.updateCompanyRepository.update(
      Number(id),
      {
        ...companyUpdatedData
      }
    )


    return { updated }
  }
}
