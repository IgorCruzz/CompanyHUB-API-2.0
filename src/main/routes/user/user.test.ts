import { connection } from '../../../infra/db/typeorm/index'
import app from '../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'

describe('Signup', () => {
  beforeAll(async () => {
    await connection.create()
  })

  afterAll(async () => {
    await connection.close()
  })

  beforeEach(async () => {
    const userEntity = getRepository(User)
    await userEntity.query(`DELETE FROM users`)
  })

  describe('User', () => {
    it('/POST  - 201', async () => {
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

    it('/POST  - 400', async () => {
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
