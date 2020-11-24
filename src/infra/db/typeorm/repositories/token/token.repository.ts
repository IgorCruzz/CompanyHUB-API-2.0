import { ISaveTokenRepository } from '@/data/protocols/db/token/saveTokenRepository.interface'
import { Repository } from 'typeorm'
import { Token } from '../../entities/Token.entity'

export class TokenRepository implements
ISaveTokenRepository {
  constructor (
    private readonly tokenRepository: Repository<Token>
  ) {}

  async saveToken (data: { user_id: number, token: string }): Promise<Token> {
    return await this.tokenRepository.save(data)
  }
}
