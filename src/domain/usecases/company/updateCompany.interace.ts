
export interface IUpdateCompanyDTO {
  cnpj?: string
  name?: string
  user: string
}

export interface IUpdateCompanyResult {
  error?: string
  updated?: boolean
}

export interface IUpdateCompany {
  update (id: number, data: IUpdateCompanyDTO): Promise<IUpdateCompanyResult>
}
