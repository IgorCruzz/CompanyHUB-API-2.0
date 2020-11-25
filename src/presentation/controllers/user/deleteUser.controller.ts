import { IDeleteUser } from '@/domain/usecases/user/deleteUser.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class DeleteUserController implements IController {
  constructor (
    private readonly deleteUser: IDeleteUser
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params

      const deleteUser = await this.deleteUser.delete(id)

      if (!deleteUser) {
        return {
          statusCode: 400,
          body: { message: 'Não existe um usuário com este ID' }
        }
      }

      return {
        statusCode: 200,
        body: { message: 'Usuário deletado com sucesso.' }
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err
      }
    }
  }
}
