import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ServiceRepository } from '../../../../infra/db/typeorm/repositories/service/service.repository'
import { DbFindAllServices } from '../../../../data/usecases/service/findAllService.data'
import { FindAllServicesController } from '../../../../presentation/controllers/service/findAllServices.controller'

export const makeFindAllServicesController = () => {
  const serviceRepository = new ServiceRepository()
  const dbFindAllServices = new DbFindAllServices(serviceRepository)

  const findAllServicesController = new FindAllServicesController(
    dbFindAllServices
  )

  return adapRoute(findAllServicesController)
}
