import { IAddService, IAddServiceDTO, IAddServiceResult } from '@/domain/usecases/service/addService.interface'
import { IDbDeleteService, IDbDeleteServiceDTO, IDbDeleteServiceResult } from '@/domain/usecases/service/deleteService.interface'
import { IDbFindAllServices, IFindAllServicesResult } from '@/domain/usecases/service/findAllService.interface'
import { IDbUpdateService, IUpdateServiceDTO, IUpdateServiceResult } from '@/domain/usecases/service/updateService.interface'

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

export class DbFindAllServicesStub implements IDbFindAllServices {
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

export class DbUpdateServiceStub implements IDbUpdateService {
  async update (id: number, user: string, data: IUpdateServiceDTO): Promise<IUpdateServiceResult> {
    return Promise.resolve({ updated: true })
  }
}
