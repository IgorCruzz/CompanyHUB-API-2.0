import { Router } from 'express'

import deleUserRoute from './deleteUser.routes'
import signupRoute from './signup.routes'

const routes = [deleUserRoute, signupRoute]

const router = Router()

export const exposeRoutes = routes.map(r => router.use(r))
