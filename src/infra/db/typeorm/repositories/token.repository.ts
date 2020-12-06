import {
  ICreateTokenDTO,
  ICreateTokenRepository,
} from '@/data/protocols/db/token/createTokenRepository.interface'
import {
  IFindTokenDTO,
  IFindTokenRepository,
} from '@/data/protocols/db/token/findTokenRepository.interface'
import { getRepository } from 'typeorm'
import { Token } from '../entities/Token.entity'

export class TokenRepository
  implements ICreateTokenRepository, IFindTokenRepository {
  async create(data: ICreateTokenDTO): Promise<Token> {
    const orm = getRepository(Token)

    return await orm.save(data)
  }

  async findToken(data: IFindTokenDTO): Promise<Token> {
    const orm = getRepository(Token)

    return await orm.findOne({ token: data.token })
  }
}
