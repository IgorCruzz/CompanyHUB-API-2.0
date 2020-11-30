import { IAddProduct, IAddProductDTO, IAddProductResult } from '@/domain/usecases/product/addProductinterface'
import { IDbDeleteProduct, IDbDeleteProductDTO, IDbDeleteProductResult } from '@/domain/usecases/product/deleteProduct.interface'

export class DbAddProductStub implements IAddProduct {
  async add (data: IAddProductDTO): Promise<IAddProductResult> {
    return Promise.resolve({
      company_id: 1,
      id: 1,
      name: 'product'
    })
  }
}

export class DbDeleteProductStub implements IDbDeleteProduct {
  async delete (data: IDbDeleteProductDTO): Promise<IDbDeleteProductResult> {
    return Promise.resolve({
      deleted: true
    })
  }
}
