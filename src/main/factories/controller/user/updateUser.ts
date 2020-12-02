import { UserRepository } from '../../../../infra/db/typeorm/repositories/user.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { BcryptAdapter } from '../../../../infra/bcryptAdapter/bcrypt.adapter'
import { DbUpdateUser } from '../../../../data/usecases/user/dbUpdateUser.data'
import { UpdateUserController } from '../../../../presentation/controllers/user/updateUser.controller'

export const makeUpdateUserController = () => {
  const userRepository = new UserRepository()
  const bcryptAdapter = new BcryptAdapter()
  const dbUpdateUser = new DbUpdateUser(
    userRepository,
    userRepository,
    userRepository,
    bcryptAdapter,
    bcryptAdapter
  )

  const updateController = new UpdateUserController(dbUpdateUser)

  return adapRoute(updateController)
}
