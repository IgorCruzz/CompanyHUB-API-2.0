import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DeleteCompanyController } from '../../../../presentation/controllers/company/deleteCompany.controller'
import { DbDeleteCompany } from '../../../../data/usecases/company/deleteCompany/dbDeleteCompany.data'

export const makeDeleteController = () => {
  const companyRepository = new CompanyRepository()
  const dbAddUser = new DbDeleteCompany(
    companyRepository,
    companyRepository
  )

  const deleteController = new DeleteCompanyController(dbAddUser)

  return adapRoute(deleteController)
}
