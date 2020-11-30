export interface IAddProductDTO {
  user: string
  name: string
  company_id: number
}

export interface IAddProductResult {
  company_id?: number
  id?: number
  name?: string
  error?: string
}

export interface IAddProduct {
  add(data: IAddProductDTO): Promise<IAddProductResult>
}
