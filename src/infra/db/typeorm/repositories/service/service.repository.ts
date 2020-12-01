import { ICreateServiceDTO, ICreateServiceRepository } from '@/data/protocols/db/service/createProductRepository'
import { IServiceModel } from '@/domain/models/service.interface'
import { getRepository } from 'typeorm'
import { Service } from '../../entities/Service.entity'

export class ServiceRepository implements ICreateServiceRepository {
  async create (date: ICreateServiceDTO): Promise<IServiceModel> {
    const orm = getRepository(Service)

    return await orm.save(date)
  }
}
