import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DbAddCompany } from '../../../../data/usecases/company/dbAddCompany.data'
import { CreateCompanyController } from '../../../../presentation/controllers/company/createCompany.controller'

export const makeAddCompanyController = () => {
  const companyRepository = new CompanyRepository()
  const dbAddCompany = new DbAddCompany(
    companyRepository,
    companyRepository,
    companyRepository
  )

  const createCompanyController = new CreateCompanyController(dbAddCompany)

  return adapRoute(createCompanyController)
}
