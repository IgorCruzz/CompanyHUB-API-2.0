import { IGenerateCrypto } from "../protocols"

export class CryptoAdapterStub implements IGenerateCrypto {
    generate (randomBytes: number): string {
      return 'TOKEN_GENERATED'
    }
  }

