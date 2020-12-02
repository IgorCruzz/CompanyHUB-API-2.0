import { IAuthorization } from '@/domain/usecases/authorization/authorization.interface'

export class DbAuthorizationStub implements IAuthorization {
  async auth (data: any): Promise<any> {
    return Promise.resolve({
      id: 1,
      administrator: false
    })
  }
}
