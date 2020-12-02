import { makeUpdateProductController } from '../../../main/factories/controller/product/updateProductController'
import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'
import { makeUpdateProductValidation } from '../../../main/factories/validation/updateProduct'

const routes = Router()

routes.put(
  '/products/:id',
  makeUpdateProductValidation(),
  adapMiddleware(makeAuthMiddleware(false)),
  makeUpdateProductController()
)

export default routes
