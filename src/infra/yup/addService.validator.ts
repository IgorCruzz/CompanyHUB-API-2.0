import {
  IValidation,
  IValidationResult
} from '@/data/protocols/yup/validation.interface'
import * as Yup from 'yup'

export class AddServiceValidation implements IValidation {
  async validate (data: any): Promise<IValidationResult> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5).max(100).required(),
      description: Yup.string().required()
    })

    return await schema
      .validate(data.body, { abortEarly: false })
      .then(() => {
        return { validate: true }
      })
      .catch((err) => {
        if (err) {
          return {
            validate: false,
            err
          }
        }
      })
  }
}
