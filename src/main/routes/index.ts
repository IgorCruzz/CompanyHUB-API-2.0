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
import createProduct from './product/createProduct.routes'
import deleteProduct from './product/deleteProduct.routes'
import findAllProducts from './product/findAllProducts.routes'
import findOneProduct from './product/findOneProduct.routes'
import updateProduct from './product/updateProduct.routes'
import createService from './service/serviceProduct.routes'
import deleteService from './service/deleteService.routes'
import findAllServices from './service/findAllServices.routes'
import updateService from './service/updateService.routes'

const routes = [
  deleteUserRoute,
  signupRoute,
  updateUser,
  singinRoute,
  createCompany,
  deleteCompany,
  findAllCompanies,
  findOneCompany,
  updateCompany,
  createProduct,
  deleteProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  createService,
  deleteService,
  findAllServices,
  updateService
]

const router = Router()

export const exposeRoutes = routes.map((r) => router.use(r))
