import { IServiceModel } from '@/domain/models/service.interface'

export interface ICreateServiceDTO {
  name: string
  description: string
  product_id: number
}

export interface ICreateServiceRepository {
  create(date: ICreateServiceDTO): Promise<IServiceModel>
}
