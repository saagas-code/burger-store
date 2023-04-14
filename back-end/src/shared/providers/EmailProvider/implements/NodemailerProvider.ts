import { IEmailProvider } from "../IEmailProvider";
import * as nodemailer from 'nodemailer';
import mailConfig from '../../../../config/mail'

export class NodemailerProvider implements IEmailProvider {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
  }
    });
  }

  async send(to: string): Promise<void> {
    console.log("inicializing")

    const html = `<b>Testeeeeeeeeeee</b>`

    const result = await this.transporter.sendMail({
      from: 'burger-store@enterprise.com',
      to,
      subject: 'Hi',
      text: 'Hello World',
      html
    })

    console.log("Message sent: %s", result.messageId)
  }
  
}