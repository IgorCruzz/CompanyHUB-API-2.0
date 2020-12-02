import { IServiceModel } from "@/domain/models/service.interface";
import { ICreateServiceDTO, ICreateServiceRepository } from "../protocols/db/service/createServiceRepository";
import { IDeleteServiceRepository } from "../protocols/db/service/deleteServiceRepository";
import { IFindAllservicesRepository } from "../protocols/db/service/findAllServicesRepository.interface";


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

export class DeleteServiceRepositoryStub implements IDeleteServiceRepository {
  async delete(id: number): Promise<boolean> {
    return Promise.resolve(true)
  }
}

export class FindAllservicesRepositoryStub implements IFindAllservicesRepository {
  async  findAll(): Promise<IServiceModel[]> {
    return Promise.resolve([{
      id: 1,
      name: 'service',
      description: 'description',
      product_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'service',
      description: 'description',
      product_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }
  ])
  }
}
