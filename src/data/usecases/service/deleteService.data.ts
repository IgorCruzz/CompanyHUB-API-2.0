import { IFindByUserRelationRepository } from "@/data/protocols/db/company/findByUserRelationRepository";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { IDeleteServiceRepository } from "@/data/protocols/db/service/deleteServiceRepository";
import { IDbDeleteService, IDbDeleteServiceDTO, IDbDeleteServiceResult } from "@/domain/usecases/service/deleteService.interface";

export class DbDeleteService implements IDbDeleteService {
  constructor (
    private readonly findByUserRelation: IFindByUserRelationRepository,
    private readonly findByProductCompanyId: IFindByProductCompanyId,
    private readonly deleteServiceRepository: IDeleteServiceRepository

  ) {}

  async   delete(data: IDbDeleteServiceDTO): Promise<IDbDeleteServiceResult> {
    const { user, product_id, id } = data

    const company = await this.findByUserRelation.findByUserRelation(Number(user))

    const product = await this.findByProductCompanyId.findProductCompanyId({
      company_id: company.id,
      product_id
    })

    if (!product) return { error:  'Você não tem permissão para deletar este serviço.' }

    const deleted = await this.deleteServiceRepository.delete(id)

    return { deleted }
  }


}
