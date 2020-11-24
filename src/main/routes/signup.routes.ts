import { makeSignUpController } from '../factories/controller/signup/signupController'
import { Router } from 'express'

const routes = Router()

routes.post('/signup', makeSignUpController())

export default routes
