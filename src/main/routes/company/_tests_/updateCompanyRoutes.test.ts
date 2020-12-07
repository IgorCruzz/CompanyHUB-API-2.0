import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { Company } from '@/infra/db/typeorm/entities/Company.entity'

jest.setTimeout(30000)

describe('Company', () => {
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

  describe('Update Company', () => {
    it('PUT /companies/:id - 200', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const company = await getRepository(Company).save({
        name: 'Igor Oliveira da Cruz',
        cnpj: '111111111111',
        user_id: user.id,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .put(`/company/${company.id}`)
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'company',
        })
        .expect(200)
    })

    it('PUT /companies/:id - 400', async () => {
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
        .put(`/company/invalid_id`)
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'company',
        })
        .expect(400)
    })

    it('PUT /companies/:id - 400', async () => {
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

      const company = await getRepository(Company).save({
        name: 'Company',
        cnpj: '111111111111',
        user_id: user2.id,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .put(`/company/${company.id}`)
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'company',
        })
        .expect(400)
    })
  })
})
