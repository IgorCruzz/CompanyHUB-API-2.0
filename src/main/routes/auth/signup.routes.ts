import { makeSignUpController } from '../../factories/controller/signup/signupController'
import { Router } from 'express'
import { makeSignUpValidation } from '../../factories/validation/signup'

const routes = Router()

routes.post('/signup', makeSignUpValidation(), makeSignUpController())

export default routes
