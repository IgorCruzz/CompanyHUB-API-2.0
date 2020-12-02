import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DbFindOneCompany } from '../../../../data/usecases/company/dbFindOneCompany.data'
import { FindOneCompanyController } from '../../../../presentation/controllers/company/findOneCompany.controller'
import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'

export const makeFindOneCompanyController = () => {
  const companyRepository = new CompanyRepository()
  const dbFindOneCompany = new DbFindOneCompany(companyRepository)
  const findOneCompanyController = new FindOneCompanyController(
    dbFindOneCompany
  )

  return adapRoute(findOneCompanyController)
}
