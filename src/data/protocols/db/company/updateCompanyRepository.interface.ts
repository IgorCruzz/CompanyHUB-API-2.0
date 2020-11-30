export interface IUpdateCompanyDTO {
  cnpj?: string
  name?: string
  user: string
}
export interface IUpdateCompanyRepository {
  update(id: number, data: IUpdateCompanyDTO): Promise<boolean>
}
