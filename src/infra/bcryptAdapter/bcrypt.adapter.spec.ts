import { IHasher } from '@/data/protocols'
import { BcryptAdapter } from './bcrypt.adapter'
import bcryptjs from 'bcryptjs'
import bcrypt from 'bcrypt'

jest.mock('bcryptjs', () => ({
  async hash (): Promise<string> {
    return Promise.resolve('hashed_value')
  }
}))

let bcryptAdapter: IHasher

describe('Bcrypt Adapter', () => {
  beforeEach(() => {
    bcryptAdapter = new BcryptAdapter()
  })

  it('should be defined', () => {
    expect(bcryptAdapter).toBeDefined()
  })

  it('should be able to return a value hashed', async () => {
    expect(await bcryptAdapter.hash('value')).toEqual('hashed_value')
  })
})
