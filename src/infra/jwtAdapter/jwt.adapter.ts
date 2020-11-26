import 'dotenv'
import { ISign } from '@/data/protocols/jwtAdapter/signJwt.interface'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements ISign {
  sign (id: string): string {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN })
  }
}
