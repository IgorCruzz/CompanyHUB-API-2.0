import { IUpdateProduct } from '@/domain/usecases/product/updateProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateProductController implements IController {
  constructor (
    private readonly updateProductData: IUpdateProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params
      const { userId } = httpRequest
      const { company_id, name } = httpRequest.body

      const product = await this.updateProductData.update(id, userId, {
        name,
        company_id
      })

      if (product.error) {
        return {
          status: 400,
          body: { message: product.error }
        }
      }

      return {
        status: 200,
        body: { message: 'Produto atualizado com sucesso!' }
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
