import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'

jest.setTimeout(30000)

describe('Auth', () => {
  beforeAll(async () => {
    await connection.create()
  })

  afterAll(async () => {
    await connection.close()
  })

  beforeEach(async () => {
    await getRepository(User).query(`DELETE FROM users`)
  })

  afterEach(async () => {
    await getRepository(User).query(`DELETE FROM users`)
  })

  describe('Signup', () => {
    it('POST /signup - 201', async () => {
      const res = await request(app)
        .post('/signup')
        .send({
          name: 'Igor Oliveira da Cruz',
          email: 'igor@email.com',
          password: 'password',
          confirmPassword: 'password',
        })
        .expect(201)

      expect(res.status).toBe(201)
    })

    it('POST /signup - should return 400 if already exists an user with email passed on request', async () => {
      await request(app).post('/signup').send({
        name: 'Igor Oliveira da Cruz',
        email: 'igor@email.com',
        password: 'password',
        confirmPassword: 'password',
      })

      const res = await request(app)
        .post('/signup')
        .send({
          name: 'Pedro Henrique de Carvalho',
          email: 'igor@email.com',
          password: 'password',
          confirmPassword: 'password',
        })
        .expect(400)

      expect(res.status).toBe(400)
    })
  })
})
