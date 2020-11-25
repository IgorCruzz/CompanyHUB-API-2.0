import { IHasher } from "../protocols"

export const mockHasher = (): IHasher => {
  class BcryptAdapterStub implements IHasher {
    async hash (value: string): Promise<string> {
      return Promise.resolve('hashed_password')
    }
  }
  return new BcryptAdapterStub()
}


