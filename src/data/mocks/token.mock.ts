import { Token } from '@/infra/db/typeorm/entities/Token.entity'
import {
  ICreateTokenDTO,
  ICreateTokenRepository,
} from '../protocols/db/token/createTokenRepository.interface'
import {
  IFindTokenDTO,
  IFindTokenRepository,
} from '../protocols/db/token/findTokenRepository.interface'

export class TokenRepositoryStub implements ICreateTokenRepository {
  async create(data: ICreateTokenDTO): Promise<Token> {
    return Promise.resolve({
      user_id: 1,
      token: 'token',
    })
  }
}

export class FindByTokenStub implements IFindTokenRepository {
  async findToken(data: IFindTokenDTO): Promise<Token> {
    return Promise.resolve({
      user_id: 1,
      token: 'token',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}
