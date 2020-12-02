import { IFindByUserRelationRepository } from "@/data/protocols/db/company/findByUserRelationRepository";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { IUpdateServiceRepository } from "@/data/protocols/db/service/updateServiceRepository";
import { IDbUpdateService, IUpdateServiceDTO, IUpdateServiceResult } from "@/domain/usecases/service/updateService.interface";

export class DbUpdateService implements IDbUpdateService {
  constructor (
    private readonly findByUserRelation: IFindByUserRelationRepository,
    private readonly findByProductCompanyId: IFindByProductCompanyId,
    private readonly updateService: IUpdateServiceRepository
  ) {}

  async update(id: number, user: string, data: IUpdateServiceDTO): Promise<IUpdateServiceResult> {
    const { product_id } = data

    const company = await this.findByUserRelation.findByUserRelation(Number(user))

    const product = await this.findByProductCompanyId.findProductCompanyId({
      company_id: company.id,
      product_id
    })

    if (!product) return { error:  'Você não tem permissão para atualizar este serviço.' }

    const request = JSON.stringify(data).toLowerCase()

    const updated = await this.updateService.update(id, JSON.parse(request))

    return { updated }
  }
}
