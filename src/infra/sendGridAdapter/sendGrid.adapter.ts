import 'dotenv/config'
import sgMail from '@sendgrid/mail'
import {
  IAuthenticateMail,
  IAuthenticateMailDTO,
} from '@/data/protocols/sendGridAdapter/sendMail.interface'

export class SendGridAdapter implements IAuthenticateMail {
  async authenticateUser(data: IAuthenticateMailDTO): Promise<void> {
    const { name, email, token } = data

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: email,
      from: process.env.HOST_EMAIL,
      subject: 'Cadastro realizado com sucesso',
      html: `<p>Olá, <strong>${name}</strong></p> <br />
             <p>Obrigado por fazer o cadastro na nossa plataforma.<br />
             <button
             type="button"
             style="
             margin:5px 0;
             background:SlateBlue;
             color:white;
             font-weight:bold;
             border:0;
             padding:10px;">
             <a href=${process.env.URL}/auth/${token}>**Clique aqui para ativar sua conta**</a>
             </button></p>`,
    }

    await sgMail
      .send(msg)
      .then(() => console.log('E-mail enviado.'))
      .catch((err) => console.log(err))
  }
}
