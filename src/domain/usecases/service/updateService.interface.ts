export interface IUpdateServiceDTO {
  name?: string
  description?: string
  product_id: number
}

export interface IUpdateServiceResult {
  error?: string
  updated?: boolean
}

export interface IUpdateService {
  update(
    id: number,
    userId: string,
    data: IUpdateServiceDTO
  ): Promise<IUpdateServiceResult>
}
