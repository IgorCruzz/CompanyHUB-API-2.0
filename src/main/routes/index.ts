import { Router } from 'express'

import deleteUserRoute from './user/deleteUser.routes'
import signupRoute from './auth/signup.routes'
import updateUser from './user/updateUser.routes'
import singinRoute from './auth/signin.routes'
import createCompany from './company/createCompany.routes'
import deleteCompany from './company/deleteCompany.routes'
import findAllCompanies from './company/findAllCompanies.routes'
import findOneCompany from './company/findOneCompany.routes'
import updateCompany from './company/updateCompany.routes'

const routes = [
  deleteUserRoute,
  signupRoute,
  updateUser,
  singinRoute,
  createCompany,
  deleteCompany,
  findAllCompanies,
  findOneCompany,
  updateCompany
]

const router = Router()

export const exposeRoutes = routes.map((r) => router.use(r))
