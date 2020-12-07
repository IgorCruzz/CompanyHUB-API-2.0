import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'
import { makeUpdateServiceController } from '../../../main/factories/controller/service/updateServiceController'
import { makeUpdateServiceValidation } from '../../../main/factories/validation/updateService'

const routes = Router()

routes.put(
  '/service/:updateId',
  makeUpdateServiceValidation(),
  adapMiddleware(makeAuthMiddleware(false)),
  makeUpdateServiceController()
)

export default routes
