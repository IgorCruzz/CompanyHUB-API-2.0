import { IDbAuthorization } from '@/domain/usecases/authorization/authorization.interface'

export class DbAuthorizationStub implements IDbAuthorization {
  async auth (data: any): Promise<any> {
    return Promise.resolve({
      id: 1,
      administrator: false
    })
  }
}
