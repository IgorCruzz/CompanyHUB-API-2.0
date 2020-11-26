import { ISignIn } from "@/domain/usecases/signin/signIn.interface"
import { DbSignIn } from "./signIn.data";

let signInData: ISignIn

describe('SigIn Data', () => {
  beforeEach(() => {
    signInData = new DbSignIn()
  })

  it('should be defined', () => {
    expect(signInData).toBeDefined()
  })
});
