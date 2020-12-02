export interface IUpdateServiceDTO {
  name?: string
  description?: string
}

export interface IUpdateServiceRepository {
  update(id: number, data: IUpdateServiceDTO): Promise<boolean>
}
