import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'
import { hash } from 'bcrypt'

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

  describe('Signin', () => {
    it('POST /signin - 200', async () => {
      const password = await hash('password', 12)

      await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igor@email.com',
        password_hash: password,
        activation: true,
      })

      const res = await request(app)
        .post('/signin')
        .send({
          email: 'igor@email.com',
          password: 'password',
        })
        .expect(200)

      expect(res.status).toEqual(200)
    })

    it('POST /signin - should return 400 if password has wrong', async () => {
      const password = await hash('different_password', 12)

      await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igor@email.com',
        password_hash: password,
        activation: true,
      })

      const res = await request(app)
        .post('/signin')
        .send({
          email: 'igor@email.com',
          password: 'password',
        })
        .expect(400)

      expect(res.status).toEqual(400)
    })

    it('POST /signin - should return 400 if the email passed doesnt belongs to an user', async () => {
      const res = await request(app)
        .post('/signin')
        .send({
          email: 'igor@email.com',
          password: 'password',
        })
        .expect(400)

      expect(res.status).toEqual(400)
    })

    it('POST /signin - should return 400 if user doesnt has activate their account', async () => {
      const password = await hash('different_password', 12)

      await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igor@email.com',
        password_hash: password,
        activation: false,
      })

      const res = await request(app)
        .post('/signin')
        .send({
          email: 'igor@email.com',
          password: 'password',
        })
        .expect(400)

      expect(res.status).toEqual(400)
    })
  })
})
