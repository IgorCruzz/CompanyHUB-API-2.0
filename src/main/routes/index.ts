import { Router } from 'express'

import deleUserRoute from './deleteUser.routes'
import signupRoute from './signup.routes'
import updateUser from './updateUser.routes'

const routes = [deleUserRoute, signupRoute, updateUser]

const router = Router()

export const exposeRoutes = routes.map(r => router.use(r))
