import { IFindByUserRelationRepository } from "@/data/protocols/db/company/findByUserRelationRepository";
import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { IAddService, IAddServiceDTO, IAddServiceResult } from "@/domain/usecases/service/addService.interface";

export class AddService implements IAddService {
  constructor (
      private readonly findByUserRelation: IFindByUserRelationRepository,
      private readonly findByProductCompanyId: IFindByProductCompanyId

  ) {}

  async add(data: IAddServiceDTO): Promise<IAddServiceResult> {
    const { user, product_id } = data

    const company = await this.findByUserRelation.findByUserRelation(Number(user))

    const product = await this.findByProductCompanyId.findProductCompanyId({
      company_id: company.id,
      product_id
    })

    if (!product && !company.user.administrator) return { error: 'Você não tem permissão para cadastrar um serviço neste produto.'}

    return await null
  }


}
