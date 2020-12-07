import { IDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { BadRequest, Ok, ServerError } from '../../http/http-helper'
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@/presentation/protocols'

export class DeleteProductController implements IController {
  constructor(private readonly deleteProduct: IDeleteProduct) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { company_id } = httpRequest.body
      const { deleteId } = httpRequest.params
      const { userId } = httpRequest

      const product = await this.deleteProduct.delete({
        company_id,
        user: Number(userId),
        params: {
          id: deleteId,
        },
      })

      if (product.error) return BadRequest(product.error)

      return Ok({ message: 'Produto deletado com sucesso!' })
    } catch (err) {
      return ServerError(err)
    }
  }
}
