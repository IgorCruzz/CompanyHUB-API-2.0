import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeDeleteController } from '../../factories/controller/company/deleteCompanyController'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.delete(
  '/company/:deleteId',
  adapMiddleware(makeAuthMiddleware(false)),
  makeDeleteController()
)

export default routes
