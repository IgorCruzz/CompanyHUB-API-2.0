import { IUpdateProduct } from '@/domain/usecases/product/updateProduct.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateProductController implements IController {
  constructor (
    private readonly updateProductData: IUpdateProduct
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params.id
      const { company_id, name } = httpRequest.body

      const product = await this.updateProductData.update(id, {
        name,
        company_id,
        user: Number(httpRequest.userId)
      })

      if (product.error) {
        return {
          statusCode: 400,
          body: { message: 'Você não tem permissão para atualizar um produto em outra empresa.' }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Produto atualizado com sucesso!' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
