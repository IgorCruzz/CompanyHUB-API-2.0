import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import {
  IController,
  IHttpRequest,
  IHttpResponse
} from '@/presentation/protocols'

export class UpdateUserController implements IController {
  constructor (private readonly updateUser: IUpdateUser) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params

      const user = await this.updateUser.update(id, httpRequest.body)

      if (user.error) {
        return {
          status: 400,
          body: { message: user.error }
        }
      }

      return {
        status: 200,
        body: { message: 'Atualizado com sucesso.' }
      }
    } catch (err) {
      return {
        status: 500,
        body: err
      }
    }
  }
}
