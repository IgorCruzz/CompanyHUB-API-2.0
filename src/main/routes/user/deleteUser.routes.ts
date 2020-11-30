import { Router } from 'express'
import { adapMiddleware } from '../../adapters/expressMiddleware.adapter'
import { makeDeleteController } from '../../factories/controller/user/deleteUser'
import { makeAuthMiddleware } from '../../factories/middlewares/authMiddleware'

const routes = Router()

routes.delete(
  '/users/:id',
  adapMiddleware(makeAuthMiddleware(false)),
  makeDeleteController()
)

export default routes
