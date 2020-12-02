import { ICreateServiceDTO, ICreateServiceRepository } from '@/data/protocols/db/service/createServiceRepository'
import { IDeleteServiceRepository } from '@/data/protocols/db/service/deleteServiceRepository'
import { IFindAllservicesRepository } from '@/data/protocols/db/service/findAllServicesRepository.interface'
import { IServiceModel } from '@/domain/models/service.interface'
import { getRepository } from 'typeorm'
import { Service } from '../../entities/Service.entity'

export class ServiceRepository implements
  ICreateServiceRepository,
  IDeleteServiceRepository,
  IFindAllservicesRepository {
  async create (date: ICreateServiceDTO): Promise<IServiceModel> {
    const orm = getRepository(Service)

    return await orm.save(date)
  }

  async delete (id: number): Promise<boolean> {
    const orm = getRepository(Service)

    const deleteCompany = await orm.delete(id)

    return deleteCompany && true
  }

  async findAll (): Promise<IServiceModel[]> {
    const orm = getRepository(Service)

    return await orm.find()
  }
}