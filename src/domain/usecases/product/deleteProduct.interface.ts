export interface IDbDeleteProductDTO {
  user: number
  params: { id: number }
  company_id: number
}

export interface IDbDeleteProductResult {
  error?: string
  deleted?: boolean
}

export interface IDbDeleteProduct {
  delete(data: IDbDeleteProductDTO): Promise<IDbDeleteProductResult>
}
