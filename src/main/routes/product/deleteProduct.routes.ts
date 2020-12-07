import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeDeleteController } from '../../factories/controller/product/deleteProductController'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.delete(
  '/product/:deleteId',
  adapMiddleware(makeAuthMiddleware(false)),
  makeDeleteController()
)

export default routes
