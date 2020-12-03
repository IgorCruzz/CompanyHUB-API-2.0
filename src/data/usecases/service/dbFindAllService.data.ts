import { IFindAllservicesRepository } from '@/data/protocols/db/service/findAllServicesRepository.interface'
import {
  IFindAllServices,
  IFindAllServicesResult,
} from '@/domain/usecases/service/findAllService.interface'

export class DbFindAllServices implements IFindAllServices {
  constructor(
    private readonly findAllServicesRepository: IFindAllservicesRepository
  ) {}

  async findAll(): Promise<IFindAllServicesResult[]> {
    return await this.findAllServicesRepository.findAll()
  }
}
