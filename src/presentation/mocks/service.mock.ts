import { IAddService, IAddServiceDTO, IAddServiceResult } from '@/domain/usecases/service/addService.interface'
import { IDeleteService, IDeleteServiceDTO, IDeleteServiceResult } from '@/domain/usecases/service/deleteService.interface'
import { IFindAllServices, IFindAllServicesResult } from '@/domain/usecases/service/findAllService.interface'
import { IUpdateService, IUpdateServiceDTO, IUpdateServiceResult } from '@/domain/usecases/service/updateService.interface'

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

export class DbDeleteServiceStub implements IDeleteService {
  async delete (data: IDeleteServiceDTO): Promise<IDeleteServiceResult> {
    return Promise.resolve({
      deleted: true
    })
  }
}

export class DbFindAllServicesStub implements IFindAllServices {
  async findAll (): Promise<IFindAllServicesResult[]> {
    return Promise.resolve([{
      id: 1,
      name: 'service',
      description: 'description',
      product_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name: 'service',
      description: 'description',
      product_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
    ])
  }
}

export class DbUpdateServiceStub implements IUpdateService {
  async update (id: number, userId: string, data: IUpdateServiceDTO): Promise<IUpdateServiceResult> {
    return Promise.resolve({ updated: true })
  }
}
