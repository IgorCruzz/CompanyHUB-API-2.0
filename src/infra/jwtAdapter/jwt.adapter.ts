import 'dotenv'
import { ISign } from '@/data/protocols/jwtAdapter/signJwt.interface'
import jwt from 'jsonwebtoken'
import { IVerify } from '@/data/protocols/jwtAdapter/verifyJwt.interface'

export class JwtAdapter implements ISign, IVerify {
  sign(id: number): string {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN,
    })
  }

  verify(token: any): any {
    try {
      const jwtVerify = jwt.verify(token, process.env.JWT_SECRET)

      return jwtVerify
    } catch (err) {
      return false
    }
  }
}
