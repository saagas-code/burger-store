import { IEmailProvider } from "../IEmailProvider";
import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()
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
    })
  }

  async accountCreated(to: string, token: string): Promise<void> {
    console.log("inicializing")

    const link = `${process.env.FRONT_END_URL}/token=${token}`

    const html = `
      <h1 align="center">Conta criada com sucesso !</h1> </br>
      <h2 align="center">Agora para você ter acesso a todas funcionalidades do sistem você precisará confirmar sua conta, Clique <a>AQUI</a> !</h2> </br>
      <a href="${link}/token=${link}">${link}</a>
    `

    await this.transporter.sendMail({
      from: 'burger-store@enterprise.com',
      to: to,
      subject: 'Hi',
      text: 'Hello World',
      html: html
    })
  }
  
}