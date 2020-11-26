
export interface IUpdateUserDTO {
  email?: string
  name?: string
  password_hash?: string
}

export interface IUpdateUser {
  update (id: number, data: IUpdateUserDTO): Promise<boolean>
}
