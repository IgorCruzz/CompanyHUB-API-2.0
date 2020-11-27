import { SiginValidation } from '../../../infra/yup/signin.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeSignInValidation = (): any => {
  const signinValidation = new SiginValidation()
  const validation = new ValidatorDecorator(signinValidation)
  return adapMiddleware(validation)
}
