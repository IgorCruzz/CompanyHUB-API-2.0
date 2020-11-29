
export interface IDbDeleteCompanyDTO {
  user: string
  params: { id: string }
}

export interface IDbDeleteCompanyResult {
  error?: string
  deleted?: boolean
}

export interface IDbDeleteCompany {
  delete (data: IDbDeleteCompanyDTO): Promise<IDbDeleteCompanyResult>
}
