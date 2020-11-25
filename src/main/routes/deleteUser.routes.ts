import { Router } from 'express'
import { makeDeleteController } from '../factories/controller/user/deleteUser'
const routes = Router()

routes.delete('/users/:id', makeDeleteController())

export default routes
