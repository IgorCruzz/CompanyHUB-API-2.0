export interface IDeleteCompanyDTO {
  user: string
  params: { id: string }
}

export interface IDeleteCompanyResult {
  error?: string
  deleted?: boolean
}

export interface IDeleteCompany {
  delete(data: IDeleteCompanyDTO): Promise<IDeleteCompanyResult>
}
