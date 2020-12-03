import { IGenerateCrypto } from '@/data/protocols/cryptoAdapter/generateCrypto.interface'
import * as crypto from 'crypto'

export class CryptoAdapter implements IGenerateCrypto {
  generate(randomBytes: number): string {
    return crypto.randomBytes(randomBytes).toString('hex')
  }
}
