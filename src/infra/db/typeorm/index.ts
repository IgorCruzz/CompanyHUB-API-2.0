import { createConnection, getConnection } from 'typeorm'

export const connection = {
  async create() {
    await createConnection()
  },

  async close() {
    await getConnection().close()
  },
}
