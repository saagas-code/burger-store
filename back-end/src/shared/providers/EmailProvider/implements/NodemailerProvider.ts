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

    const link = `${process.env.FRONT_END_URL}/token=${token}`

    const html = `
      <h1 align="center">Conta criada com sucesso !</h1> </br>
      <h2 align="center">Agora para você ter acesso a todas funcionalidades do sistem você precisará confirmar sua conta, Clique <a>AQUI</a> !</h2> </br>
      token: ${token} </br>
      <a href="${link}">${link}</a>
    `

    await this.transporter.sendMail({
      from: 'burger-store@enterprise.com',
      to: to,
      subject: 'Criação de conta',
      text: 'Hello World',
      html: html
    })
  }

  async sendConfirmToken(emailTo: string, token: string): Promise<void> {
    
    const link = `${process.env.FRONT_END_URL}/token=${token}`

    const html = `
      <h1 align="center">Token de confirmação gerado com sucesso!</h1> </br>
      <h2 align="center">Clique no link abaixo para confirmar sua conta. !</h2> </br>
      <a href="${link}">${link}</a>
    `

    await this.transporter.sendMail({
      from: 'burger-store@enterprise.com',
      to: emailTo,
      subject: 'Confirmação de conta',
      text: 'Hello World',
      html: html
    })


  }

  async accountVerified(emailTo: string): Promise<void> {

    const link = `${process.env.FRONT_END_URL}`
  
    const html = `
      <h1 align="center">Conta confirmada com sucesso!</h1> </br>
      <h2 align="center">Agora sua conta esta pronta e agora você possui acesso completo ao nosso site, clique no link abaixo: </h2> </br>
      <a href="${link}">${link}</a>
    `

    await this.transporter.sendMail({
      from: 'burger-store@enterprise.com',
      to: emailTo,
      subject: 'Confirmação de conta',
      text: 'Hello World',
      html: html
    })


  }
  
}