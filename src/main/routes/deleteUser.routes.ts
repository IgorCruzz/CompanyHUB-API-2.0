import { Router } from 'express'
import { makeDeleteController } from '../factories/controller/user/deleteUser'
import { makeAuthMiddleware } from '../factories/middlewares/authMiddleware'

const routes = Router()

routes.delete('/users/:id', makeAuthMiddleware(), makeDeleteController())

export default routes
