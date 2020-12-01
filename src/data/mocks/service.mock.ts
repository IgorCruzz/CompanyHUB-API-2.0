import { IServiceModel } from "@/domain/models/service.interface";
import { ICreateServiceDTO, ICreateServiceRepository } from "../protocols/db/service/createServiceRepository";


export class CreateServiceRepositoryStub implements ICreateServiceRepository {
  async create(date: ICreateServiceDTO): Promise<IServiceModel> {
    return Promise.resolve({
      id: 1,
      name: 'service',
      description: 'description',
      product_id: 1  ,
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

