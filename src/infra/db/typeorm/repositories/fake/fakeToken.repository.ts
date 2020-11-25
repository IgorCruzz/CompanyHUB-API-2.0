import { ICreateTokenDTO, ICreateTokenRepository } from '@/data/protocols'
import { Token } from '../../entities/Token.entity'

export class FakeTokenRepository implements ICreateTokenRepository {
  private readonly tokens: Token[] = []

  async create (data: ICreateTokenDTO): Promise<Token> {
    const token = new Token()

    Object.assign(token, { id: 1, created_at: new Date(), updated_at: new Date() }, data)

    this.tokens.push(token)

    return await token
  }
}
