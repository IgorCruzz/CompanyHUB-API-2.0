import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product.repository'
import { CreateServiceController } from '../../../../presentation/controllers/service/createService.controller'
import { DbAddService } from '../../../../data/usecases/service/dbCreateService.data'
import { ServiceRepository } from '../../../../infra/db/typeorm/repositories/service.repository'

export const makeAddServiceController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const serviceRepository = new ServiceRepository()

  const dbAddService = new DbAddService(
    companyRepository,
    productRepository,
    serviceRepository
  )

  const createServiceController = new CreateServiceController(dbAddService)

  return adapRoute(createServiceController)
}
