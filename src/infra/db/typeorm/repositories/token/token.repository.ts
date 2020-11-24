import { ISaveTokenRepository } from '@/data/protocols/db/token/saveTokenRepository.interface'
import { getRepository } from 'typeorm'
import { Token } from '../../entities/Token.entity'

export class TokenRepository implements
ISaveTokenRepository {
  async saveToken (data: { user_id: number, token: string }): Promise<Token> {
    const orm = getRepository(Token)

    return await orm.save(data)
  }
}
