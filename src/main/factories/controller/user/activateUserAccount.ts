import { UserRepository } from '../../../../infra/db/typeorm/repositories/user.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DbActivateUserAccount } from '@/data/usecases/user/dbActivateUserAccount.data'
import { TokenRepository } from '@/infra/db/typeorm/repositories/token.repository'
import { ActivateUserAccountController } from '@/presentation/controllers/user/activateUserAccount.controller'

export const makeActivateUserAccountController = () => {
  const userRepository = new UserRepository()
  const tokenRepository = new TokenRepository()
  const dbActivateUserAccount = new DbActivateUserAccount(
    tokenRepository,
    userRepository,
    userRepository
  )

  const ActivateAccountController = new ActivateUserAccountController(
    dbActivateUserAccount
  )

  return adapRoute(ActivateAccountController)
}
