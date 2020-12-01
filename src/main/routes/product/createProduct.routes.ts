import { makeAddProductController } from '../../../main/factories/controller/product/addCompanyController'
import { makeAddProductValidation } from '../../../main/factories/validation/addProduct'
import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.post(
  '/products',
  makeAddProductValidation(),
  adapMiddleware(makeAuthMiddleware(false)),
  makeAddProductController()
)

export default routes
