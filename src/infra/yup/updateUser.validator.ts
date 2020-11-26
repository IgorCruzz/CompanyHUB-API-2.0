import { IValidation, IValidationResult } from '@/data/protocols/yup/validation.interface'
import * as Yup from 'yup'

export class UpdateUserValidation implements IValidation {
  async validate (data: any): Promise<IValidationResult> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      )
    })

    return await schema.validate(data.body, { abortEarly: false }).then(() => {
      return { validate: true }
    }).catch(err => {
      if (err) {
        return {
          validate: false,
          err
        }
      }
    })
  }
}
