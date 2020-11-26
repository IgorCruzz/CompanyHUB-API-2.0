import { IUpdateUser } from '@/domain/usecases/user/updateUser.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class UpdateUserController implements IController {
  constructor (
    private readonly updateUser: IUpdateUser
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { id } = httpRequest.params

    const updateUser = await this.updateUser.update(id, httpRequest.body)

    return {
      statusCode: 200,
      body: { message: 'Atualizado com sucesso.' }
    }
  }
}
