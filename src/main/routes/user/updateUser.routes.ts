import { Router } from 'express'
import { makeUpdateUserValidation } from '../../factories/validation/updateUser'
import { makeUpdateUserController } from '../../factories/controller/user/updateUser'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.put(
  '/users/:updateId',
  adapMiddleware(makeAuthMiddleware(false)),
  makeUpdateUserValidation(),
  makeUpdateUserController()
)

export default routes
