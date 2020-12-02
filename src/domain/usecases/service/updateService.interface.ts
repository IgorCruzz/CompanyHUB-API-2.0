export interface IUpdateServiceDTO {
  name?: string
  description?: string
  product_id: number
}

export interface IUpdateServiceResult {
  error?: string
  updated?: boolean
}

export interface IDbUpdateService {
  update(id: number, user: string, data: IUpdateServiceDTO): Promise<IUpdateServiceResult>
}
