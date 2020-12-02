import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product.repository'
import { ServiceRepository } from '../../../../infra/db/typeorm/repositories/service.repository'
import { DbUpdateService } from '../../../../data/usecases/service/dbUpdateService.data'
import { UpdateServiceController } from '../../../../presentation/controllers/service/updateService.controller'

export const makeUpdateServiceController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const serviceRepository = new ServiceRepository()

  const dbUpdateService = new DbUpdateService(
    companyRepository,
    productRepository,
    serviceRepository
  )

  const updateController = new UpdateServiceController(dbUpdateService)

  return adapRoute(updateController)
}
