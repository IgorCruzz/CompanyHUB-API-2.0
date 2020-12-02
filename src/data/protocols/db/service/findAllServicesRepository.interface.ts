import { IServiceModel } from '@/domain/models/service.interface'

export interface IFindAllservicesRepository {
  findAll(): Promise<IServiceModel[]>
}
