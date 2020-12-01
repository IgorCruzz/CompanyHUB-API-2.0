import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeFindAllProductsController } from '../../factories/controller/product/findAllProductsController'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.get(
  '/products',
  adapMiddleware(makeAuthMiddleware(true)),
  makeFindAllProductsController()
)

export default routes
