export interface IUpdateProductDTO {
  name?: string
  company_id: number
}

export interface IUpdateProductResult {
  error?: string
  updated?: boolean
}

export interface IUpdateProduct {
  update(id: number, userId: string, data: IUpdateProductDTO): Promise<IUpdateProductResult>
}
