import { IHttpRequest } from '@/presentation/protocols'

export interface IValidationResult {
  validate: boolean
  err?: any
}

export interface IValidation {
  validate(data: IHttpRequest): Promise<IValidationResult>
}
