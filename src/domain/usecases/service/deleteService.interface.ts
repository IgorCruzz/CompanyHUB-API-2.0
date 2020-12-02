export interface IDeleteServiceDTO {
  user: string
  id: number
  product_id: number
}

export interface IDeleteServiceResult {
  error?: string
  deleted?: boolean
}

export interface IDeleteService {
  delete(data: IDeleteServiceDTO): Promise<IDeleteServiceResult>
}
