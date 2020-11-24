import { Token } from "@/infra/db/typeorm/entities/Token.entity";

export interface ISaveTokenRepository {
  saveToken (data: { user_id: number, token: string }): Promise<Token>
}