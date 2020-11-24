import { DbAddUser } from '../../../../data/usecases/user/add-user/dbAddUser'
import { TokenRepository } from '../../../../infra/db/typeorm/repositories/token/token.repository'
import { UserRepository } from '../../../../infra/db/typeorm/repositories/user/user.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { SignupController } from '../../../../presentation/controllers/signup/signup.controller'
import { CryptoAdapter } from '../../../../infra/cypto/crypto.adapter'

export const makeSignUpController = () => {
  const cryptoAdapter = new CryptoAdapter()
  const tokenRepository = new TokenRepository()
  const userRepository = new UserRepository()
  const dbAddUser = new DbAddUser(
    cryptoAdapter,
    userRepository,
    userRepository,
    tokenRepository
  )

  const signupController = new SignupController(dbAddUser)

  return adapRoute(signupController)
}
