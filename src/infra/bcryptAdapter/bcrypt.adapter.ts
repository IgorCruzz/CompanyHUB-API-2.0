import { IHasher } from '@/data/protocols/bcryptAdapter/IHasher.interface'
import * as bcryptjs from 'bcryptjs'

export class BcryptAdapter implements IHasher {
  async hash (value: string): Promise<string> {
    return await bcryptjs.hash(value, 16)
  }
}
