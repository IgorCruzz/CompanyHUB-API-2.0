import { AddServiceValidation } from '../../../infra/yup/addService.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeAddServiceValidation = (): any => {
  const addServiceValidation = new AddServiceValidation()
  const validation = new ValidatorDecorator(addServiceValidation)
  return adapMiddleware(validation)
}
