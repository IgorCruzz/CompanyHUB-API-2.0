export interface IAddServiceDTO {
  name: string
  description: string
  product_id: number
  user: string
}

export interface IAddServiceResult {
  id?: number
  name?: string
  description?: string
  product_id?: number
  error?: string
}

export interface IAddService {
  add(data: IAddServiceDTO): Promise<IAddServiceResult>
}
