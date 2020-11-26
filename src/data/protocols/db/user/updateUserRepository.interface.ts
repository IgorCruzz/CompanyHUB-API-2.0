
export interface IUpdateUserDTO {
  email?: string
  name?: string
  oldPassword?: string
  password?: string
  confirmPassword?: string
}

export interface IUpdateUserRepository {
  update (id: number, data: IUpdateUserDTO): Promise<boolean>
}
