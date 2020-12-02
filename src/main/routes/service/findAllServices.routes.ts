import { makeFindAllServicesController } from '../../../main/factories/controller/service/findAllServicesController'
import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.get(
  '/services',
  adapMiddleware(makeAuthMiddleware(true)),
  makeFindAllServicesController()
)

export default routes
