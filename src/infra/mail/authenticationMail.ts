import 'dotenv/config'
import * as sgMail from '@sendgrid/mail'

export const AuthenticationMail = async (data: {
  name: string
  email: string
  token: string
}) => {
  const { name, email, token } = data

  sgMail.setApiKey(process.env.EMAIL)

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
           background:green;
           color:white;
           font-weight:bold;
           border:0;
           padding:10px;">
           <a href=${process.env.URL}/auth/${token}>**Clique aqui para ativar sua conta**</a>
           </button></p>`,
  }

  await sgMail.send(msg)
}
