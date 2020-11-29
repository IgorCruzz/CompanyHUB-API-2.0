import { UpdateCompanyValidation } from '../../../infra/yup/updateCompany.validator'
import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { ValidatorDecorator } from '../../../main/decorator/validator.decorator'

export const makeUpdateCompanyValidation = (): any => {
  const updateCompanyValidation = new UpdateCompanyValidation()
  const validation = new ValidatorDecorator(updateCompanyValidation)
  return adapMiddleware(validation)
}
