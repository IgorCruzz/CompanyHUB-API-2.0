import { IFindByUserRelationRepository } from "@/data/protocols/db/company/findByUserRelationRepository";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { ICreateServiceRepository } from "@/data/protocols/db/service/createServiceRepository";
import { IAddService, IAddServiceDTO, IAddServiceResult } from "@/domain/usecases/service/addService.interface";

export class AddService implements IAddService {
  constructor (
      private readonly findByUserRelation: IFindByUserRelationRepository,
      private readonly findByProductCompanyId: IFindByProductCompanyId,
      private readonly createService: ICreateServiceRepository

  ) {}

  async add(data: IAddServiceDTO): Promise<IAddServiceResult> {
    const { user, product_id, name, description } = data

    const company = await this.findByUserRelation.findByUserRelation(Number(user))

    const product = await this.findByProductCompanyId.findProductCompanyId({
      company_id: company.id,
      product_id
    })

    if (!product && !company.user.administrator) return { error: 'Você não tem permissão para cadastrar um serviço neste produto.'}

    const service = await this.createService.create({
      name: name.toLowerCase(),
      description,
      product_id,
    })

    return {
      id: service.id,
      name: service.name,
      description: service.description,
      product_id: service.product_id
    }
  }


}
