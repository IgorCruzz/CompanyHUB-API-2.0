import { IDbFindOneCompany, IDbFindOneCompanyResult } from "@/domain/usecases/company/findOneCompany.interface";


export class DbFindOneCompany implements IDbFindOneCompany {
  async findOne(id: string): Promise<IDbFindOneCompanyResult> {
    return await null
  }

}
