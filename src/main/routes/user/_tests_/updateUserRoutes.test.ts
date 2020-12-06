import { connection } from '../../../../infra/db/typeorm/index'
import app from '../../../config/app'
import request from 'supertest'
import { getRepository } from 'typeorm'
import { User } from '@/infra/db/typeorm/entities/User.entity'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

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
  })

  describe('UPDATE', () => {
    it('(200) - should be able to update an user data', async () => {
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

      const res = await request(app)
        .put(`/users/${user.id}`)
        .set('authorization', `Bearer ${authorization}`)
        .send({
          name: 'Igor cruz',
        })
        .expect(200)

      expect(res.body).toEqual({ message: 'Atualizado com sucesso.' })
    })

    it('(401) - should return Unauthorized if user doesnt passed the token', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const res = await request(app).put(`/users/${user.id}`).expect(401)

      expect(res.body).toEqual({ error: 'Insira o token.' })
    })

    it('(400) - should return bad request if an user try to delete another account', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Pedro Henrique de Carvalho',
        email: 'ph.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const authorization = sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      const res = await request(app)
        .put(`/users/999`)
        .set('authorization', `Bearer ${authorization}`)
        .expect(400)

      expect(res.body).toEqual({ error: 'Não existe um usuário com este ID.' })
    })

    it('(400) - should return bad request if an user try to delete another account', async () => {
      const password = await hash('password', 12)

      const user = await getRepository(User).save({
        name: 'Igor Oliveira da Cruz',
        email: 'igorcruz.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const user2 = await getRepository(User).save({
        name: 'Pedro Henrique de Carvalho',
        email: 'ph.dev@email.com',
        password_hash: password,
        activation: true,
      })

      const authorization = sign({ id: user2.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      })

      const res = await request(app)
        .put(`/users/${user.id}`)
        .set('authorization', `Bearer ${authorization}`)
        .expect(400)

      expect(res.body).toEqual({
        error:
          'Você não tem permissão para atualizar a conta de outro usuário.',
      })
    })
  })
})
