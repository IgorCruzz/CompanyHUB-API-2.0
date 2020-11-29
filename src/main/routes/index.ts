import { Router } from 'express'

import deleUserRoute from './deleteUser.routes'
import signupRoute from './signup.routes'
import updateUser from './updateUser.routes'
import singinRoute from './signin.routes'
import createCompany from './createCompany.routes'
import deleteCompany from './deleteCompany.routes'
import findAllCompanies from './findAllCompanies.routes'

const routes = [
  deleUserRoute,
  signupRoute,
  updateUser,
  singinRoute,
  createCompany,
  deleteCompany,
  findAllCompanies]

const router = Router()

export const exposeRoutes = routes.map(r => router.use(r))
