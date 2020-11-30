export interface IUpdateUserDTO {
  email?: string
  name?: string
  oldPassword?: string
  password?: string
  confirmPassword?: string
}

export interface IUpdateResult {
  error?: string
  updated?: boolean
}

export interface IUpdateUser {
  update(id: number, data: IUpdateUserDTO): Promise<IUpdateResult>
}
