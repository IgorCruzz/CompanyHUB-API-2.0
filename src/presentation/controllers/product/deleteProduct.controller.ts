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
          statusCode: 400,
          body: { message: product.error }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Produto deletado com sucesso!' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
