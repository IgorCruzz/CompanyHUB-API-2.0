import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeDeleteController } from '../../factories/controller/service/deleteServiceController'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.delete(
  '/service/:deleteId',
  adapMiddleware(makeAuthMiddleware(false)),
  makeDeleteController()
)

export default routes
