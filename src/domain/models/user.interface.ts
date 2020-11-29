export interface IUserModel {
  id: number
  name: string
  email: string
  password_hash: string
  administrator: boolean
  activation: boolean
  created_at: Date
  updated_at: Date
}
