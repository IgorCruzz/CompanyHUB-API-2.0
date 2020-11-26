import { UpdateUserValidation } from '../../../infra/yup/updateUser.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeUpdateUserValidation = (): any => {
  const updateUserValidation = new UpdateUserValidation()
  const validation = new ValidatorDecorator(updateUserValidation)
  return adapMiddleware(validation)
}
