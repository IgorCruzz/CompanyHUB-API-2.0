import { IAuthorization } from "@/domain/usecases/authorization/authorization.interface";

export class DbAuthorization implements IAuthorization {
  async auth (data: any): Promise<any> {
    return null
  }

}
