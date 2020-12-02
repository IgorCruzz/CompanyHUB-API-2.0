export interface IUpdateCompanyDTO {
  cnpj?: string
  name?: string
}

export interface IUpdateCompanyResult {
  error?: string
  updated?: boolean
}

export interface IUpdateCompany {
  update(id: number, userId: string, data: IUpdateCompanyDTO): Promise<IUpdateCompanyResult>
}
