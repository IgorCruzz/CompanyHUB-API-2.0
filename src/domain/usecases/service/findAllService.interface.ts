
export interface IFindAllServicesResult {
  id?: number
  name?: string
  description?: string
  product_id?: number
  error?: string
}

export interface IDbFindAllServices {
  findAll(): Promise<IFindAllServicesResult[]>
}
