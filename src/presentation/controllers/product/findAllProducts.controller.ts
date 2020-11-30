import { IDbFindAllProducts } from '@/domain/usecases/product/findAllProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindAllProductsController implements IController {
  constructor (
    private readonly findAllProduct: IDbFindAllProducts
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const products = await this.findAllProduct.findAll()

      return {
        statusCode: 200,
        body: products
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
