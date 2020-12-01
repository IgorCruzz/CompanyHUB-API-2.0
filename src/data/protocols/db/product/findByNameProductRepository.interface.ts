import { IProductModel } from "@/domain/models/product.interface";

export interface IFindByProductNameRepository {
  findName (name: string): Promise<IProductModel>
}
