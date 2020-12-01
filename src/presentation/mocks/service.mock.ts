import { IAddService, IAddServiceDTO, IAddServiceResult } from '@/domain/usecases/service/addService.interface'

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
