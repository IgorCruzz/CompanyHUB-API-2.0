import { ICompare } from '../protocols/bcryptAdapter/ICompare.interface'
import { IHasher } from '../protocols/bcryptAdapter/IHasher.interface'

export class BcryptAdapterStub implements IHasher {
  async hash(value: string): Promise<string> {
    return Promise.resolve('hashed_password')
  }
}

export class BcryptCompareStub implements ICompare {
  compare(firstValue: string, secondValue: string): Promise<boolean> {
    return Promise.resolve(true)
  }
}
