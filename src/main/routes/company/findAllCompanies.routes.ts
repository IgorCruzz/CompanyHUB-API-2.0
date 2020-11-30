import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeFindAllCompaniesController } from '../../factories/controller/company/findAllCompaniesController'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.get(
  '/companies',
  adapMiddleware(makeAuthMiddleware(true)),
  makeFindAllCompaniesController()
)

export default routes
