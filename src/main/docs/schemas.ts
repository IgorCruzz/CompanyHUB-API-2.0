import { deleteSchema } from './schemas/delete/delete.schema'
import { errorSchema } from './schemas/error/error-schema'
import { signInParamSchema } from './schemas/params/auth/sigInParam.schema'
import { signupParamSchema } from './schemas/params/auth/signUpParam.schema'
import { createCompanyParams } from './schemas/params/company/createCompanyParam.schema'
import { updateCompanyParamSchema } from './schemas/params/company/updateCompanyParam.schema'
import { createProductParams } from './schemas/params/product/createProductParam.schema'
import { deleteProductParamSchema } from './schemas/params/product/deleteProductParam.schema'
import { updateProductParamSchema } from './schemas/params/product/updateProductParam.schema'
import { createServiceParams } from './schemas/params/service/createServiceParam.schema'
import { deleteServiceParamSchema } from './schemas/params/service/deleteServiceParam.schema'
import { updateServiceParamSchema } from './schemas/params/service/updateServiceParam.schema'
import { updateUserParamSchema } from './schemas/params/user/updateUserParam.schema'
import { signInResultSchema } from './schemas/results/auth/signin.schema'
import { signUpResultSchema } from './schemas/results/auth/signup.schema'
import { companiesSchema } from './schemas/results/company/companies.schema'
import { companySchema } from './schemas/results/company/company.schema'
import { createCompanySchema } from './schemas/results/company/createCompany.schema'
import { createProductSchema } from './schemas/results/product/createProduct.schema'
import { ProductSchema } from './schemas/results/product/product.schema'
import { ProductsSchema } from './schemas/results/product/products.schema'
import { createServiceSchema } from './schemas/results/service/createService.schema'
import { ServiceSchema } from './schemas/results/service/service.schema'
import { ServicesSchema } from './schemas/results/service/services.schema'
import { updateSchema } from './schemas/update/update.schema'

export default {
  error: errorSchema,
  deleteResult: deleteSchema,
  updateResult: updateSchema,

  signupParams: signupParamSchema,
  signUpResult: signUpResultSchema,

  signInParams: signInParamSchema,
  signInResult: signInResultSchema,

  updateUserParams: updateUserParamSchema,

  createCompanyParams: createCompanyParams,
  createCompanyResult: createCompanySchema,

  findAllCompaniesResult: companiesSchema,
  CompanyResultSchema: companySchema,

  updateCompanyParamSchema: updateCompanyParamSchema,

  createProductParams: createProductParams,
  createProductResult: createProductSchema,

  updateProductParamSchema: updateProductParamSchema,

  productResult: ProductSchema,
  findAllProductsResult: ProductsSchema,

  serviceResult: ServiceSchema,

  createServiceParams: createServiceParams,
  createServiceResult: createServiceSchema,

  updateServiceParamSchema: updateServiceParamSchema,

  findAllServicesResult: ServicesSchema,

  deleteProductParamSchema: deleteProductParamSchema,
  deleteServiceParamSchema: deleteServiceParamSchema,
}
