import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DbUpdateCompany } from '../../../../data/usecases/company/updateCompany/updateCompany.data'
import { UpdateCompanyController } from '@/presentation/controllers/company/updateCompany.controller'

export const makeUpdateCompanyController = () => {
  const companyRepository = new CompanyRepository()
  const dbUpdateCompany = new DbUpdateCompany(companyRepository, companyRepository)
  const updateCompanyCompanyController = new UpdateCompanyController(dbUpdateCompany)

  return adapRoute(updateCompanyCompanyController)
}
