export interface IDeleteProductDTO {
  user: number
  params: { id: number }
  company_id: number
}

export interface IDeleteProductResult {
  error?: string
  deleted?: boolean
}

export interface IDeleteProduct {
  delete(data: IDeleteProductDTO): Promise<IDeleteProductResult>
}
