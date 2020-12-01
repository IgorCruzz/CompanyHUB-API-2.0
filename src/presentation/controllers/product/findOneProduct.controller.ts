import { IDbFindOneProduct } from '@/domain/usecases/product/findOneProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindOneProductController implements IController {
  constructor (
    private readonly findOneProduct: IDbFindOneProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const products = await this.findOneProduct.findOne(httpRequest.params.id)

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
