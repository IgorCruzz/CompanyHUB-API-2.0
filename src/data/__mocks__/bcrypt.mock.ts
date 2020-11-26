import { IHasher } from "../protocols"
import { ICompare } from "../protocols/bcryptAdapter/ICompare.interface"

export const mockHasher = (): IHasher => {
  class BcryptAdapterStub implements IHasher {
    async hash (value: string): Promise<string> {
      return Promise.resolve('hashed_password')
    }
  }
  return new BcryptAdapterStub()
}

export const mockCompare = (): ICompare => {
  class BcryptCompareStub implements ICompare {
    compare (firstValue: string, secondValue: string): Promise<boolean> {
      return Promise.resolve(true)
    }
  }
  return new BcryptCompareStub()
}


