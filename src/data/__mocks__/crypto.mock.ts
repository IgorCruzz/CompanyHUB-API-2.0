import { IGenerateCrypto } from "../protocols"


export const mockCryptoAdapter = (): IGenerateCrypto => {
  class CryptoAdapterStub implements IGenerateCrypto {
    generate (randomBytes: number): string {
      return 'TOKEN_GENERATED'
    }
  }
  return new CryptoAdapterStub()
}
