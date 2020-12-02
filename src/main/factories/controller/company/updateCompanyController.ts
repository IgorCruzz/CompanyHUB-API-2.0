import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DbUpdateCompany } from '../../../../data/usecases/company/dbUpdateCompany.data'
import { UpdateCompanyController } from '../../../../presentation/controllers/company/updateCompany.controller'
import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'

export const makeUpdateCompanyController = () => {
  const companyRepository = new CompanyRepository()
  const dbUpdateCompany = new DbUpdateCompany(
    companyRepository,
    companyRepository
  )
  const updateCompanyController = new UpdateCompanyController(
    dbUpdateCompany
  )

  return adapRoute(updateCompanyController)
}
