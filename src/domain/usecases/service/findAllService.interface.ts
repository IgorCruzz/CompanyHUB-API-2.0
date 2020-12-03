export interface IFindAllServicesResult {
  id?: number
  name?: string
  description?: string
  product_id?: number
  error?: string
}

export interface IFindAllServices {
  findAll(): Promise<IFindAllServicesResult[]>
}
