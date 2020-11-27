import { Router } from 'express'
import { makeSignUpValidation } from '../factories/validation/signup'
import { makeSignInController } from '../factories/controller/signin/signInController'

const routes = Router()

routes.post('/signin', makeSignUpValidation(), makeSignInController())

export default routes
