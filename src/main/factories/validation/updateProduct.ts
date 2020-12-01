import { UpdateProductValidation } from '../../../infra/yup/updateProduct.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeUpdateProductValidation = (): any => {
  const updateProductValidation = new UpdateProductValidation()
  const validation = new ValidatorDecorator(updateProductValidation)
  return adapMiddleware(validation)
}
