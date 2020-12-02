import { ICreateServiceDTO, ICreateServiceRepository } from '@/data/protocols/db/service/createServiceRepository.interface'
import { IDeleteServiceRepository } from '@/data/protocols/db/service/deleteServiceRepository.interface'
import { IFindAllservicesRepository } from '@/data/protocols/db/service/findAllServicesRepository.interface'
import { IUpdateServiceDTO, IUpdateServiceRepository } from '@/data/protocols/db/service/updateServiceRepository.interface'
import { IServiceModel } from '@/domain/models/service.interface'
import { getRepository } from 'typeorm'
import { Service } from '../entities/Service.entity'

export class ServiceRepository implements
  ICreateServiceRepository,
  IDeleteServiceRepository,
  IFindAllservicesRepository,
  IUpdateServiceRepository {
  async create (date: ICreateServiceDTO): Promise<IServiceModel> {
    const orm = getRepository(Service)

    return await orm.save(date)
  }

  async update (id: number, data: IUpdateServiceDTO): Promise<boolean> {
    const orm = getRepository(Service)

    const updateService = await orm.update(id, data)

    return updateService && true
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
