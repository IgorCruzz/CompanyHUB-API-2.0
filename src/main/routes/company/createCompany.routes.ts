import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAddCompanyController } from '../../factories/controller/company/addCompanyController'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'
import { makeAddCompanyValidation } from '../../factories/validation/addCompany'

const routes = Router()

routes.post('/companies',
  makeAddCompanyValidation(),
  adapMiddleware(makeAuthMiddleware(false)),
  makeAddCompanyController())

export default routes
