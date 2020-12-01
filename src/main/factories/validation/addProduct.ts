import { AddProductValidation } from '../../../infra/yup/addProduct.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeAddProductValidation = (): any => {
  const addProductValidation = new AddProductValidation()
  const validation = new ValidatorDecorator(addProductValidation)
  return adapMiddleware(validation)
}
