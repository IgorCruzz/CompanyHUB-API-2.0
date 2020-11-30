export interface IAddCompanyDTO {
  user: string
  name: string
  cnpj?: string
}

export interface IAddCompanyResult {
  user_id?: number
  cnpj?: string
  id?: number
  name?: string
  error?: string
}

export interface IAddCompany {
  add(data: IAddCompanyDTO): Promise<IAddCompanyResult>
}
