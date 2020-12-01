import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'
import { makeAddServiceValidation } from '../../../main/factories/validation/addService'
import { makeAddServiceController } from '../../../main/factories/controller/service/addServiceController'

const routes = Router()

routes.post(
  '/services',
  makeAddServiceValidation(),
  adapMiddleware(makeAuthMiddleware(false)),
  makeAddServiceController()
)

export default routes
