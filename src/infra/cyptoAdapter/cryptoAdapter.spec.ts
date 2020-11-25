import { CryptoAdapter } from './crypto.adapter'

let cryptoAdapter: CryptoAdapter

describe('CryptoAdapter', () => {
  beforeEach(() => {
    cryptoAdapter = new CryptoAdapter()
  })

  it('should be defined', () => {
    expect(CryptoAdapter).toBeDefined()
  })
})
