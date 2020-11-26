import { Token } from "@/infra/db/typeorm/entities/Token.entity"
import { ICreateTokenDTO, ICreateTokenRepository } from "../protocols"


export const mockTokenCreateRepository = (): ICreateTokenRepository => {
class TokenRepositoryStub implements ICreateTokenRepository {
  async create (data: ICreateTokenDTO): Promise<Token> {

    return Promise.resolve({
      user_id: 1,
      token: 'token'
    })
  }
}
return new TokenRepositoryStub()
}
