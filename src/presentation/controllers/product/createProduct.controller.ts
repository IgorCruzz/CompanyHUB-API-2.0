import { IAddProduct } from '@/domain/usecases/product/addProductinterface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class CreateProductController implements IController {
  constructor (
    private readonly addProduct: IAddProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const product = await this.addProduct.add({
        user: httpRequest.userId,
        ...httpRequest.body
      })

      if (product.error) {
        return {
          status: 401,
          body: { message: product.error }
        }
      }

      return {
        status: 200,
        body: product
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
