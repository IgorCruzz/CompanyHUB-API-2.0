import { adapMiddleware } from '../../../main/adapters/expressMiddleware.adapter'
import { AuthMiddleware } from '../../../presentation/middlewares/auth.middleware'
import { DbAuthorization } from '../../../data/usecases/authorization/authorization.data'
import { UserRepository } from '../../../infra/db/typeorm/repositories/user/user.repository'
import { JwtAdapter } from '../../../infra/jwtAdapter/jwt.adapter'

export const makeAuthMiddleware = (): any => {
  const ver = new JwtAdapter()
  const user = new UserRepository()
  const dbAuth = new DbAuthorization(ver, user)
  const validation = new AuthMiddleware(dbAuth, true)
  return adapMiddleware(validation)
}
