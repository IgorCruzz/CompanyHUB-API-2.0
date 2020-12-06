import {
  IAuthenticateMail,
  IAuthenticateMailDTO,
} from '../protocols/sendGridAdapter/sendMail.interface'

export class SendGridAdapterStub implements IAuthenticateMail {
  async authenticateUser(data: IAuthenticateMailDTO): Promise<void> {}
}
