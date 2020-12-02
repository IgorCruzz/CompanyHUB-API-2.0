import { IAddProduct, IAddProductDTO, IAddProductResult } from '@/domain/usecases/product/addProductinterface'
import { IDbDeleteProduct, IDbDeleteProductDTO, IDbDeleteProductResult } from '@/domain/usecases/product/deleteProduct.interface'
import { IDbFindAllProducts, IDbFindAllProductsResult } from '@/domain/usecases/product/findAllProduct.interface'
import { IDbFindOneProduct, IDbFindOneProductResult } from '@/domain/usecases/product/findOneProduct.interface'
import { IUpdateProduct, IUpdateProductDTO, IUpdateProductResult } from '@/domain/usecases/product/updateProduct.interface'

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

export class DbUpdateProductStub implements IUpdateProduct {
  async update (id: number, userId: string, data: IUpdateProductDTO): Promise<IUpdateProductResult> {
    return Promise.resolve({
      updated: true
    })
  }
}

export class DbFindAllProductStub implements IDbFindAllProducts {
  async findAll (): Promise<IDbFindAllProductsResult[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'product',
        company_id: 1,
        companyConnection: {
          user_id: 1,
          cnpj: '11111111111',
          id: 1,
          productConnection: [],
          name: 'company',
          created_at: new Date(),
          updated_at: new Date()
        },
        serviceConnection: [],
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

export class DbFindOneProductStub implements IDbFindOneProduct {
  async findOne (id: number): Promise<IDbFindOneProductResult[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'product',
        company_id: 1,
        companyConnection: {
          user_id: 1,
          cnpj: '11111111111',
          id: 1,
          productConnection: [],
          name: 'company',
          created_at: new Date(),
          updated_at: new Date()
        },
        serviceConnection: [],
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}
