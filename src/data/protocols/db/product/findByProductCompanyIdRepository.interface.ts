import { IProductModel } from "@/domain/models/product.interface";

export interface IFindByProductCompanyIdDTO {
  company_id: number,
  product_id: number
}

export interface IFindByProductCompanyId {
  findProductCompanyId(data: IFindByProductCompanyIdDTO): Promise<IProductModel>
}
