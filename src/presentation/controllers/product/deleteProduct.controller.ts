import { IDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class DeleteProductController implements IController {
  constructor (
    private readonly deleteProduct: IDeleteProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { company_id } = httpRequest.body
      const { id } = httpRequest.params
      const { userId } = httpRequest

      const product = await this.deleteProduct.delete({
        company_id,
        user: Number(userId),
        params: {
          id
        }
      })

      if (product.error) {
        return {
          status: 400,
          body: { message: product.error }
        }
      }

      return {
        status: 200,
        body: { message: 'Produto deletado com sucesso!' }
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
