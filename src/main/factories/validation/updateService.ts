import { UpdateServiceValidation } from '../../../infra/yup/updateService.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeUpdateServiceValidation = (): any => {
  const updateServiceValidation = new UpdateServiceValidation()
  const validation = new ValidatorDecorator(updateServiceValidation)
  return adapMiddleware(validation)
}
