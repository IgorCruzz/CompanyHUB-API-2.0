export interface IAddUserDTO {
  email: string
  name: string
  password_hash: string
}

export interface IAddResult {
  id?: number
  name?: string
  email?: string
  error?: string
}

export interface IAddUser {
  add(data: IAddUserDTO): Promise<IAddResult>
}
