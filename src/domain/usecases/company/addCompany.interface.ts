
export interface IAddCompanyDTO {
  user: number
  email: string
  name: string
  cnpj?: string
  password_hash: string
}

export interface IAddCompanyResult {
  user_id?: number
  cnpj?: string
  id?: number
  name?: string
  error?: string
}

export interface IAddCompany {
  add (data: IAddCompanyDTO): Promise<IAddCompanyResult>
}
