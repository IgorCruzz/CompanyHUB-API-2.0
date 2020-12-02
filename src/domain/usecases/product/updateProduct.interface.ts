export interface IUpdateProductDTO {
  name?: string
  company_id: number
  user: number
}

export interface IUpdateProductResult {
  error?: string
  updated?: boolean
}

export interface IUpdateProduct {
  update(id: number, data: IUpdateProductDTO): Promise<IUpdateProductResult>
}