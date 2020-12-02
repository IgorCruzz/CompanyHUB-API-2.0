import { IAddProduct } from '@/domain/usecases/product/addProduct.interface'
import { BadRequest, Created, ServerError } from '../../http/http-helper'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class CreateProductController implements IController {
  constructor (
    private readonly addProduct: IAddProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest

      const product = await this.addProduct.add({
        user: userId,
        ...httpRequest.body
      })

      if (product.error) return BadRequest(product.error)

      return Created(product)
    } catch (err) {
      return ServerError(err)
    }
  }
}
