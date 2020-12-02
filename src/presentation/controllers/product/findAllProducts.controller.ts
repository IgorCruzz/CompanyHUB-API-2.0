import { IFindAllProducts } from '@/domain/usecases/product/findAllProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindAllProductsController implements IController {
  constructor (
    private readonly findAllProduct: IFindAllProducts
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const products = await this.findAllProduct.findAll()

      return {
        status: 200,
        body: products
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
