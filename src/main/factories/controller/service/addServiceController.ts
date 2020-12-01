import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { CreateCompanyController } from '../../../../presentation/controllers/company/createCompany.controller'
import { AddService } from '../../../../data/usecases/service/createService.data'
import { ProductRepository } from '../../../..//infra/db/typeorm/repositories/product/product.repository'
import { ServiceRepository } from '../../../../infra/db/typeorm/repositories/service/service.repository'

export const makeAddServiceController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const serviceRepository = new ServiceRepository()

  const dbAddService = new AddService(
    companyRepository,
    productRepository,
    serviceRepository
  )

  const createServiceController = new CreateCompanyController(dbAddService)

  return adapRoute(createServiceController)
}
