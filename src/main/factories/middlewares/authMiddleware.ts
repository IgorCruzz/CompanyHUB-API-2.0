import { AuthMiddleware } from '../../../presentation/middlewares/auth.middleware'
import { DbAuthorization } from '../../../data/usecases/authorization/authorization.data'
import { UserRepository } from '../../../infra/db/typeorm/repositories/user/user.repository'
import { JwtAdapter } from '../../../infra/jwtAdapter/jwt.adapter'

export const makeAuthMiddleware = (role: boolean): any => {
  const ver = new JwtAdapter()
  const user = new UserRepository()
  const dbAuth = new DbAuthorization(ver, user)
  return new AuthMiddleware(dbAuth, role)
}
