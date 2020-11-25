import { ICreateTokenDTO, ICreateTokenRepository } from '@/data/protocols'
import { getRepository } from 'typeorm'
import { Token } from '../../entities/Token.entity'

export class TokenRepository implements ICreateTokenRepository {
  async create (data: ICreateTokenDTO): Promise<Token> {
    const orm = getRepository(Token)

    return await orm.save(data)
  }
}
