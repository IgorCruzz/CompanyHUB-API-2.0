import { IAddService, IAddServiceDTO, IAddServiceResult } from '@/domain/usecases/service/addService.interface'
import { IDbDeleteService, IDbDeleteServiceDTO, IDbDeleteServiceResult } from '@/domain/usecases/service/deleteService.interface'

export class DbAddServiceStub implements IAddService {
  async add (data: IAddServiceDTO): Promise<IAddServiceResult> {
    return Promise.resolve({
      id: 1,
      name: 'service',
      description: 'description',
      product_id: 1
    })
  }
}

export class DbDeleteServiceStub implements IDbDeleteService {
  async delete (data: IDbDeleteServiceDTO): Promise<IDbDeleteServiceResult> {
    return Promise.resolve({
      deleted: true
    })
  }
}
