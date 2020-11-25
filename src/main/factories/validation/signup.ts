import { SignupValidation } from '../../../infra/yup/signup.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeSignUpValidation = (): any => {
  const signupValidation = new SignupValidation()
  const validation = new ValidatorDecorator(signupValidation)
  return adapMiddleware(validation)
}
