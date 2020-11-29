import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { FindAllCompanyController } from '../../../../presentation/controllers/company/findAllCompany.controller'
import { DbFindAllCompany } from '../../../../data/usecases/company/dbFindAllCompany.data'

export const makeFindAllCompaniesController = () => {
  const companyRepository = new CompanyRepository()
  const dbFindAllCompany = new DbFindAllCompany(companyRepository)

  const findAllCompaniesController = new FindAllCompanyController(dbFindAllCompany)

  return adapRoute(findAllCompaniesController)
}
