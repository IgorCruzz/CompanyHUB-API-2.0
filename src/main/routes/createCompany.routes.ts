import { Router } from 'express'
import { adapMiddleware } from '../adapters/expressMiddleware.adapter'
import { makeAddCompanyController } from '../factories/controller/company/addCompanyController'
import { makeAuthMiddleware } from '../factories/middlewares/authMiddleware'

const routes = Router()

routes.post('/companies', adapMiddleware(makeAuthMiddleware(false)), makeAddCompanyController())

export default routes
