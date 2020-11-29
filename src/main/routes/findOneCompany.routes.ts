import { Router } from 'express'
import { adapMiddleware } from '../adapters/expressMiddleware.adapter'
import { makeFindOneCompanyController } from '../factories/controller/company/findOneCompanyController'
import { makeAuthMiddleware } from '../factories/middlewares/authMiddleware'

const routes = Router()

routes.delete('/companies/:id',
  adapMiddleware(makeAuthMiddleware(false)),
  makeFindOneCompanyController())

export default routes
