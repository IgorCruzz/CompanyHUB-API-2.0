export interface IDbDeleteServiceDTO {
  user: string
  id: number
  product_id: number
}

export interface IDbDeleteServiceResult {
  error?: string
  deleted?: boolean
}

export interface IDbDeleteService {
  delete(data: IDbDeleteServiceDTO): Promise<IDbDeleteServiceResult>
}
