import { IDbDeleteProduct } from '@/domain/usecases/product/deleteProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class DeleteProductController implements IController {
  constructor (
    private readonly deleteProduct: IDbDeleteProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const product = await this.deleteProduct.delete({
      company_id: httpRequest.body.company_id,
      user: Number(httpRequest.userId),
      params: {
        id: httpRequest.params.id
      }
    })

    return {
      statusCode: 200,
      body: { message: 'Produto deletado com sucesso!' }
    }
  }
}
