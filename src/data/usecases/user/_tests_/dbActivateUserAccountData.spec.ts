import { FindByTokenStub } from '@/data/mocks/token.mock'
import {
  UpdateUserRepositoryStub,
  UserFindByIdRepositoryStub,
} from '@/data/mocks/user.mock'
import { IFindTokenRepository } from '@/data/protocols/db/token/findTokenRepository.interface'
import { IFindUserByIdRepository } from '@/data/protocols/db/user/findUserByIdRepository.interface'
import { IUpdateUserRepository } from '@/data/protocols/db/user/updateUserRepository.interface'
import { IActivateUserAccount } from '@/domain/usecases/user/activateUserAccount.interface'
import { DbActivateUserAccount } from '../dbActivateUserAccount.data'

let findTokenRepository: IFindTokenRepository
let activateUserAccount: IActivateUserAccount
let userFindIdRepository: IFindUserByIdRepository
let userUpdateRepository: IUpdateUserRepository

describe('DbActiveAccount Data', () => {
  beforeEach(() => {
    findTokenRepository = new FindByTokenStub()
    userFindIdRepository = new UserFindByIdRepositoryStub()
    userUpdateRepository = new UpdateUserRepositoryStub()
    activateUserAccount = new DbActivateUserAccount(
      findTokenRepository,
      userFindIdRepository,
      userUpdateRepository
    )
  })

  it('should be defined', () => {
    expect(activateUserAccount).toBeDefined()
  })

  it('should be able to call findTokenRepository with success', async () => {
    const res = jest.spyOn(findTokenRepository, 'findToken')

    await activateUserAccount.activate('token')

    expect(res).toHaveBeenCalledWith({ token: 'token' })
  })

  it('should return an error message if findTokenRepository returns undefined', async () => {
    jest.spyOn(findTokenRepository, 'findToken').mockResolvedValue(undefined)

    const res = await activateUserAccount.activate('token')

    expect(res).toEqual({ error: 'Token Invalído' })
  })

  it('should be able to call IFindUserByIdRepository with success', async () => {
    const res = jest.spyOn(userFindIdRepository, 'findId')

    await activateUserAccount.activate('token')

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should be able to call to UpdateUserRepository with success', async () => {
    const res = jest.spyOn(userUpdateRepository, 'update')

    await activateUserAccount.activate('token')

    expect(res).toHaveBeenCalledWith(1, { activation: true })
  })
})
