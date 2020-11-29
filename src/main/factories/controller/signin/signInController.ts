import { UserRepository } from '../../../../infra/db/typeorm/repositories/user/user.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { BcryptAdapter } from '../../../../infra/bcryptAdapter/bcrypt.adapter'
import { SignInController } from '../../../../presentation/controllers/signin/signIn.controller'
import { DbSignIn } from '../../../../data/usecases/signin/dbSignIn.data'
import { JwtAdapter } from '../../../../infra/jwtAdapter/jwt.adapter'

export const makeSignInController = () => {
  const jwtAdapter = new JwtAdapter()
  const userRepository = new UserRepository()
  const bcryptAdapter = new BcryptAdapter()
  const dbAddUser = new DbSignIn(
    jwtAdapter,
    userRepository,
    bcryptAdapter
  )

  const signinController = new SignInController(dbAddUser)

  return adapRoute(signinController)
}
