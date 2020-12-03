import { IFindAllProducts } from '@/domain/usecases/product/findAllProduct.interface'
import { Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class FindAllProductsController implements IController {
  constructor(private readonly findAllProduct: IFindAllProducts) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const products = await this.findAllProduct.findAll()

      return Ok(products)
    } catch (err) {
      return ServerError(err)
    }
  }
}
