import { AddCompanyValidation } from '../../../infra/yup/addCompany.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeAddCompanyValidation = (): any => {
  const addCompanyValidation = new AddCompanyValidation()
  const validation = new ValidatorDecorator(addCompanyValidation)
  return adapMiddleware(validation)
}
