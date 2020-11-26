import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateUserController implements IController {
  constructor (
    private readonly updateUser: IUpdateUser
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params

      const user = await this.updateUser.update(id, httpRequest.body)

      if (!user) {
        return {
          statusCode: 400,
          body: { message: 'Não foi possivel atualizar seus dados' }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Atualizado com sucesso.' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
