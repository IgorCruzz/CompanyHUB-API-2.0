import { IFindOneProduct } from '@/domain/usecases/product/findOneProduct.interface'
import { Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class FindOneProductController implements IController {
  constructor(private readonly findOneProduct: IFindOneProduct) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const products = await this.findOneProduct.findOne(httpRequest.params.id)

      return Ok(products)
    } catch (err) {
      return ServerError(err)
    }
  }
}
