import schemas from './schemas'
import components from './components'
import { deleteUser } from './paths/user/deleteUser'
import { updateUser } from './paths/user/updateUser'
import { signUp } from './paths/auth/signUp'
import { signIn } from './paths/auth/signIn'
import { findAllCompanies } from './paths/company/findAllCompanies'
import { createCompany } from './paths/company/addCompany'
import { updateCompany } from './paths/company/updateCompany'
import { findOneCompany } from './paths/company/findOneCompany'
import { deleteCompany } from './paths/company/deleteCompany'
import { createProduct } from './paths/product/addProduct'
import { updateProduct } from './paths/product/updateProduct'
import { deleteProduct } from './paths/product/deleteProduct'
import { findAllProducts } from './paths/product/findAllProducts'
import { findOneProduct } from './paths/product/findOneProduct'
import { createService } from './paths/service/addService'
import { updateService } from './paths/service/updateService'
import { deleteService } from './paths/service/deleteService'
import { findAllServices } from './paths/service/findAllServices'

export default {
  openapi: '3.0.0',
  info: {
    title: 'companyHUB',
    description: '',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/',
    },
  ],
  license: {
    name: '',
    url: '',
  },
  tags: [
    {
      name: 'Auth',
    },
    {
      name: 'User',
    },
    {
      name: 'Company',
    },
    {
      name: 'Product',
    },
    {
      name: 'Service',
    },
  ],
  paths: {
    '/signup': signUp,
    '/signin': signIn,
    '/users/{deleteId}': deleteUser,
    '/users/{updateId}': updateUser,
    '/companies': findAllCompanies,
    '/company': createCompany,
    '/company/{updateId}': updateCompany,
    '/company/{findId}': findOneCompany,
    '/company/{deleteId}': deleteCompany,
    '/product': createProduct,
    '/product/{updateId}': updateProduct,
    '/product/{deleteId}': deleteProduct,
    '/products': findAllProducts,
    '/product/{findId}': findOneProduct,
    '/service': createService,
    '/service/{updateId}': updateService,
    '/service/{deleteId}': deleteService,
    '/services': findAllServices,
  },
  components,
  schemas,
}
