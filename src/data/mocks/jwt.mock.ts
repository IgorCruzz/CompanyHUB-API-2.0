import { ISign } from "../protocols/jwtAdapter/signJwt.interface"

export const MockJwtSignAdapter = (): ISign => {
  class JwtSignAdapterStub implements ISign {
    sign (id: number): string {
      return 'token'
    }
  }
  return new JwtSignAdapterStub()
}
