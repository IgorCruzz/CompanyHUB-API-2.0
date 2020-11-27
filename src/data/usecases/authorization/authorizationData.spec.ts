import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";
import { DbAuthorization } from "./authorization.data";

let authorizationData: IAuthorization

describe('Authorization Data', () => {
  beforeEach(() => {
    authorizationData =  new DbAuthorization()
  })

  it('should be defined', () => {
    expect(authorizationData).toBeDefined()

  })
});
