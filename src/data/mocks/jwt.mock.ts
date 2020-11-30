import { ISign } from '../protocols/jwtAdapter/signJwt.interface'
import { IVerify } from '../protocols/jwtAdapter/verifyJwt.interface'

export class JwtSignAdapterStub implements ISign {
  sign(id: number): string {
    return 'token'
  }
}

export class JwtVerifydapterStub implements IVerify {
  verify(token: any): any {
    return { id: 1 }
  }
}
