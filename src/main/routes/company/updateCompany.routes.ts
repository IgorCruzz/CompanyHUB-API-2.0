import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'
import { makeUpdateCompanyController } from '../../factories/controller/company/updateCompanyController'
import { makeUpdateCompanyValidation } from '../../factories/validation/updateCompany'

const routes = Router()

routes.put(
  '/companies/:id',
  adapMiddleware(makeAuthMiddleware(false)),
  makeUpdateCompanyValidation(),
  makeUpdateCompanyController()
)

export default routes
