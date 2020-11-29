import { IUpdateCompany, IUpdateCompanyDTO, IUpdateCompanyResult } from "@/domain/usecases/company/updateCompany.interace";

export class DbUpdateCompany implements IUpdateCompany {

  async update (id: number, data: IUpdateCompanyDTO): Promise<IUpdateCompanyResult> {
    return await null
  }
}
