import { makeFindOneProductController } from '../../../main/factories/controller/product/findOneProductController'
import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.get(
  '/product/:findId',
  adapMiddleware(makeAuthMiddleware(false)),
  makeFindOneProductController()
)

export default routes
