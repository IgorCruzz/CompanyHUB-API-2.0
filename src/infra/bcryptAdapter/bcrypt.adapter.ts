import { ICompare } from '@/data/protocols/bcryptAdapter/ICompare.interface'
import { IHasher } from '@/data/protocols/bcryptAdapter/IHasher.interface'
import * as bcryptjs from 'bcryptjs'

export class BcryptAdapter implements IHasher, ICompare {
  async hash(value: string): Promise<string> {
    return await bcryptjs.hash(value, 12)
  }

  async compare(firstValue: string, secondValue: string): Promise<boolean> {
    return await bcryptjs.compare(firstValue, secondValue)
  }
}
