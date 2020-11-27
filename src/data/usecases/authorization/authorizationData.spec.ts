import { MockJwtVerifyAdapter } from "@/data/mocks/jwt.mock";
import { IVerify } from "@/data/protocols/jwtAdapter/verifyJwt.interface";
import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";
import { DbAuthorization } from "./authorization.data";

let authorizationData: IAuthorization
let verifyRepository: IVerify

describe('Authorization Data', () => {
  beforeEach(() => {
    verifyRepository = MockJwtVerifyAdapter()
    authorizationData =  new DbAuthorization(verifyRepository)
  })

  it('should be defined', () => {
    expect(authorizationData).toBeDefined()
  })

  it('should be able to call VerifyRepository with success', async () => {
    const res = jest.spyOn(verifyRepository, 'verify')

    await authorizationData.auth({ token: 'token'})

    expect(res).toHaveBeenCalledWith('token')
  })
});
