import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IFindByProductCompanyId } from "@/data/protocols/db/product/findByProductCompanyIdRepository.interface";
import { IAddService, IAddServiceDTO, IAddServiceResult } from "@/domain/usecases/service/addService.interface";

export class AddService implements IAddService {
  constructor (
      private readonly findUserIdRepository: IFindUserIdRepository,
      private readonly findByProductCompanyId: IFindByProductCompanyId

  ) {}

  async add(data: IAddServiceDTO): Promise<IAddServiceResult> {
    const { user, product_id } = data

    const company = await this.findUserIdRepository.findUserId(Number(user))

    await this.findByProductCompanyId.findProductCompanyId({
      company_id: company.id,
      product_id
    })

    return await null
  }


}
