import { IDbDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class DeleteProductController implements IController {
  constructor (
    private readonly deleteProduct: IDbDeleteProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const product = await this.deleteProduct.delete({
        company_id: httpRequest.body.company_id,
        user: Number(httpRequest.userId),
        params: {
          id: httpRequest.params.id
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
