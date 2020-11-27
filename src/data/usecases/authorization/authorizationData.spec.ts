import { MockJwtVerifyAdapter } from "@/data/mocks/jwt.mock";
import { MockUserFindByIdRepository } from "@/data/mocks/user.mock";
import { IFindUserByIdRepository } from "@/data/protocols/db/user/findUserByIdRepository.interface";
import { IVerify } from "@/data/protocols/jwtAdapter/verifyJwt.interface";
import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";
import { DbAuthorization } from "./authorization.data";

let authorizationData: IAuthorization
let verifyRepository: IVerify
let userFindIdRepository: IFindUserByIdRepository

describe('Authorization Data', () => {
  beforeEach(() => {
    verifyRepository = MockJwtVerifyAdapter()
    userFindIdRepository = MockUserFindByIdRepository()
    authorizationData =  new DbAuthorization(verifyRepository, userFindIdRepository)
  })

  it('should be defined', () => {
    expect(authorizationData).toBeDefined()
  })

  it('should be able to call VerifyRepository with success', async () => {
    const res = jest.spyOn(verifyRepository, 'verify')

    await authorizationData.auth({ token: 'token'})

    expect(res).toHaveBeenCalledWith('token')
  })

  it('should be able to return an user id', async () => {
    const res = await authorizationData.auth({ token: 'token'})

    expect(res).toEqual({
      id: 1
    })
  })

  it('should be returns an error message if VerifyRepository returns false', async () => {

    jest.spyOn(verifyRepository, 'verify').mockReturnValue(false)

    const res = await authorizationData.auth({ token: 'token'})

    expect(res).toEqual({
     error: 'Token inválido.'
    })
  })

  it('should be able to call userFindIdRepository with success', async () => {
    const res = jest.spyOn(userFindIdRepository, 'findId')

    await authorizationData.auth({ token: 'token'})

    expect(res).toHaveBeenCalledWith(1)
  })

  it('should return an error message if userFindIdRepository returns undefined', async () => {
    jest.spyOn(userFindIdRepository, 'findId').mockResolvedValue(undefined)

    const res = await authorizationData.auth({ token: 'token'})

    expect(res).toEqual({
     error: 'Este token não pertence a nenhum usuário.'
    })
  })

  it('should return an error message if user try to update another user data', async () => {
    jest.spyOn(verifyRepository, 'verify').mockReturnValue({ id: 2})

    const res = await authorizationData.auth({ token: 'token', role: true, params: { id: 1 }})

    expect(res).toEqual({
     error: 'Você não tem permissão para fazer isto.'
    })
  })
});
