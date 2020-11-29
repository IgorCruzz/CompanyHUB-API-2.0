import { IDbDeleteCompany, IDbDeleteCompanyDTO, IDbDeleteCompanyResult } from "@/domain/usecases/company/deleteCompany.interface";

export class DbDeleteCompany implements IDbDeleteCompany {
  async delete (data: IDbDeleteCompanyDTO): Promise<IDbDeleteCompanyResult> {
    return null
  }

}
