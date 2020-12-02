import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DeleteCompanyController } from '../../../../presentation/controllers/company/deleteCompany.controller'
import { DbDeleteCompany } from '../../../../data/usecases/company/dbDeleteCompany.data'
import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'

export const makeDeleteController = () => {
  const companyRepository = new CompanyRepository()
  const dbDeleteCompany = new DbDeleteCompany(
    companyRepository,
    companyRepository
  )

  const deleteController = new DeleteCompanyController(dbDeleteCompany)

  return adapRoute(deleteController)
}
