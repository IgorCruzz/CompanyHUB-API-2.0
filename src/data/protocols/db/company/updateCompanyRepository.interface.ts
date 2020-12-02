export interface IUpdateCompanyDTO {
  cnpj?: string
  name?: string
}
export interface IUpdateCompanyRepository {
  update(id: number, data: IUpdateCompanyDTO): Promise<boolean>
}
