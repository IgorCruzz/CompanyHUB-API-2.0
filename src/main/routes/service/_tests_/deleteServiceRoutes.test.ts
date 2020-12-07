import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { Company } from '@/infra/db/typeorm/entities/Company.entity'
import { Product } from '@/infra/db/typeorm/entities/Product.entity'
import { Service } from '@/infra/db/typeorm/entities/Service.entity'

jest.setTimeout(30000)

describe('Service', () => {
  beforeAll(async () => {
    await connection.create()
  })

  afterAll(async () => {
    await connection.close()
  })

  beforeEach(async () => {
    await getRepository(User).query(`DELETE FROM users`)
    await getRepository(Company).query(`DELETE FROM companies`)
    await getRepository(Product).query(`DELETE FROM products`)
    await getRepository(Service).query(`DELETE FROM services`)
  })

  afterEach(async () => {
    await getRepository(User).query(`DELETE FROM users`)
    await getRepository(Company).query(`DELETE FROM companies`)
    await getRepository(Product).query(`DELETE FROM products`)
    await getRepository(Service).query(`DELETE FROM services`)
  })

  describe('Delete Service', () => {
    it('DELETE /service - 200', async () => {
      const password = await hash('password', 12)
      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const company = await getRepository(Company).save({
        name: 'Company',
        cnpj: '111111111111',
        user_id: user.id,
      })

      const product = await getRepository(Product).save({
        name: 'Company',
        company_id: company.id,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .delete(`/service/${product.id}`)
        .set('authorization', `Bearer ${authorization}`)
        .send({
          product_id: product.id,
        })
        .expect(200)
    })

    it('DELETE /service - 200', async () => {
      const password = await hash('password', 12)
      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const company = await getRepository(Company).save({
        name: 'Company',
        cnpj: '111111111111',
        user_id: user.id,
      })

      const product = await getRepository(Product).save({
        name: 'Company',
        company_id: company.id,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      await request(app)
        .delete(`/service/${product.id}`)
        .set('authorization', `Bearer ${authorization}`)
        .send({
          product_id: 'invalid_id',
        })
        .expect(400)
    })
  })
})
