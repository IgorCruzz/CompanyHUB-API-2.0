import { IGenerateCrypto } from '../protocols/cryptoAdapter/generateCrypto.interface'

export class CryptoAdapterStub implements IGenerateCrypto {
  generate(randomBytes: number): string {
    return 'TOKEN_GENERATED'
  }
}
