import { Token } from '@/infra/db/typeorm/entities/Token.entity'

export interface IFindTokenDTO {
  token: string
}

export interface IFindTokenRepository {
  findToken(data: IFindTokenDTO): Promise<Token>
}
