import { Router } from 'express'
import { makeUpdateUserValidation } from '../factories/validation/updateUser'
import { makeUpdateUserController } from '../factories/controller/user/updateUser'

const routes = Router()

routes.put('/users/:id', makeUpdateUserValidation(), makeUpdateUserController())

export default routes
