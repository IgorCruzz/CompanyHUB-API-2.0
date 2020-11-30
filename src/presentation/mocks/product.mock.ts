import { IAddProduct, IAddProductDTO, IAddProductResult } from '@/domain/usecases/product/addProductinterface'

export class DbAddProductStub implements IAddProduct {
  async add (data: IAddProductDTO): Promise<IAddProductResult> {
    return Promise.resolve({
      company_id: 1,
      id: 1,
      name: 'product'
    })
  }
}
