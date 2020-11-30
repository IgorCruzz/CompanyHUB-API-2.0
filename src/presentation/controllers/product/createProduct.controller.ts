import { IAddProduct } from '@/domain/usecases/product/addProductinterface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class CreateProductController implements IController {
  constructor (
    private readonly addProduct: IAddProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const product = await this.addProduct.add({
      user: httpRequest.userId,
      ...httpRequest.body
    })

    return {
      statusCode: 200,
      body: product
    }
  }
}
