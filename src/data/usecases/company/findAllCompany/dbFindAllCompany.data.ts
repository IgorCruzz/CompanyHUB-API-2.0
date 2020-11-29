import { IDbFindAllCompany, IDbFindAllCompanyResult } from "@/domain/usecases/company/findAllCompanies.interface";

export class DbFindAllCompany implements IDbFindAllCompany {
   async findAll (): Promise<IDbFindAllCompanyResult> {
    return null
   }

}
