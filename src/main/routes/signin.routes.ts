import { Router } from 'express'
import { makeSignInController } from '../factories/controller/signin/signInController'
import { makeSignInValidation } from '../factories/validation/signin'

const routes = Router()

routes.post('/signin', makeSignInValidation(), makeSignInController())

export default routes
