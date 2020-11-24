
import { DbAddUser } from '../../../../data/usecases/user/add-user/dbAddUser'
import { TokenRepository } from '../../../../infra/db/typeorm/repositories/token/token.repository'
import { UserRepository } from '../../../../infra/db/typeorm/repositories/user/user.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { SignupController } from '../../../../presentation/controllers/signup/signup.controller'

export const makeSignUpController = (): any => {
  const tokenRepository = new TokenRepository()
  const userRepository = new UserRepository()
  const dbAddUser = new DbAddUser(
    userRepository,
    userRepository,
    tokenRepository
  )

  const fodase = new SignupController(dbAddUser)

  return adapRoute(fodase)
}
