export interface IDbDeleteProductDTO {
  user: string
  params: { id: string }
  company_id: string
}

export interface IDbDeleteProductResult {
  error?: string
  deleted?: boolean
}

export interface IDbDeleteProduct {
  delete(data: IDbDeleteProductDTO): Promise<IDbDeleteProductResult>
}
