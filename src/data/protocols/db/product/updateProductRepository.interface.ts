export interface IUpdateProductDTO {
  name?: string
}

export interface IUpdateProductRepository {
  update(id: number, data: IUpdateProductDTO): Promise<boolean>
}
