import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'
import { hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { Company } from '@/infra/db/typeorm/entities/Company.entity'

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
    await getRepository(Company).query(`DELETE FROM companies`)
  })

  afterEach(async () => {
    await getRepository(User).query(`DELETE FROM users`)
    await getRepository(Company).query(`DELETE FROM companies`)
  })

  describe('Create Company', () => {
    it('POST /companies - 201', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .post('/companies')
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'Igor Oliveira da Cruz',
          cnpj: '111111111111',
        })
        .expect(201)
    })

    it('POST /companies - 400, shoud return bad request is user has already an company registered', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      await getRepository(Company).save({
        name: 'Igor Oliveira da Cruz',
        cnpj: '111111111111',
        user_id: user.id,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .post('/companies')
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'Igor Oliveira da Cruz',
          cnpj: '111111111111',
        })
        .expect(400)
    })

    it('POST /companies - 400, shoud return bad request if has already a company registered with cnpj passed through the body', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const user2 = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.devo@email.com',
        password_hash: password,
        activation: true,
      })

      await getRepository(Company).save({
        name: 'Company',
        cnpj: '111111111111',
        user_id: user2.id,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .post('/companies')
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'Company',
          cnpj: '111111111111',
        })
        .expect(400)
    })
  })
})
