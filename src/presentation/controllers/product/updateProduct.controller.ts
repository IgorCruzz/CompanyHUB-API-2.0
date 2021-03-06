import { IUpdateProduct } from '@/domain/usecases/product/updateProduct.interface'
import { BadRequest, Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class UpdateProductController implements IController {
  constructor(private readonly updateProductData: IUpdateProduct) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { updateId } = httpRequest.params
      const { userId } = httpRequest
      const { company_id, name } = httpRequest.body

      const product = await this.updateProductData.update(updateId, userId, {
        name,
        company_id,
      })

      if (product.error) return BadRequest(product.error)

      return Ok({ message: 'Produto atualizado com sucesso!' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
