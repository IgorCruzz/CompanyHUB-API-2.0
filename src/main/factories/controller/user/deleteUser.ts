import { DbAddUser } from '../../../../data/usecases/user/add-user/dbAddUser'
import { TokenRepository } from '../../../../infra/db/typeorm/repositories/token/token.repository'
import { UserRepository } from '../../../../infra/db/typeorm/repositories/user/user.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DeleteUserController } from '../../../../presentation/controllers/user/deleteUser.controller'
import { DbDeleteUser } from '../../../../data/usecases/user/delete-user/dbDeleteUser.data'

export const makeDeleteController = () => {
  const userRepository = new UserRepository()
  const dbAddUser = new DbDeleteUser(
    userRepository,
    userRepository
  )

  const deleteController = new DeleteUserController(dbAddUser)

  return adapRoute(deleteController)
}
