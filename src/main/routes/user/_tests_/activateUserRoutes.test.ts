import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'
import { hash } from 'bcryptjs'
import { Token } from '@/infra/db/typeorm/entities/Token.entity'

jest.setTimeout(30000)

describe('User', () => {
  beforeAll(async () => {
    await connection.create()
  })

  afterAll(async () => {
    await connection.close()
  })

  beforeEach(async () => {
    await getRepository(User).query(`DELETE FROM users`)
    await getRepository(Token).query(`DELETE FROM tokens`)
  })

  describe('ACTIVATE', () => {
    it('PUT /auth/:token', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const token = await getRepository(Token).save({
        user_id: user.id,
        token: 'token',
      })

      await request(app).put(`/auth/${token.token}`).expect(200)
    })
  })
})
