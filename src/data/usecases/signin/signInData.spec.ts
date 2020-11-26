import { MockJwtSignAdapter } from "@/data/mocks/jwt.mock";
import { ISign } from "@/data/protocols/jwtAdapter/signJwt.interface";
import { ISignIn } from "@/domain/usecases/signin/signIn.interface"
import { DbSignIn } from "./signIn.data";

let signInData: ISignIn
let jwtSignAdapter: ISign

describe('SigIn Data', () => {
  beforeEach(() => {
    jwtSignAdapter = MockJwtSignAdapter()
    signInData = new DbSignIn(jwtSignAdapter)
  })

  it('should be defined', () => {
    expect(signInData).toBeDefined()
  })

  it('should be able to signin', async () => {

    const res = await signInData.signIn({
      email: 'user@mail.com',
      password: 'password'
    })

    expect(res).toEqual({
      id: 1,
      name: 'name',
      email: 'user@mail.com',
      token: 'token'
    })

  })
});
