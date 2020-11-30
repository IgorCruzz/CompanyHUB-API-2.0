import { Token } from '@/infra/db/typeorm/entities/Token.entity'

export interface ICreateTokenDTO {
  user_id: number
  token: string
}

export interface ICreateTokenRepository {
  create(data: ICreateTokenDTO): Promise<Token>
}
