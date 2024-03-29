import { HttpException, HttpStatus } from "@nestjs/common";
import { IEmailProvider } from "../IEmailProvider";
import { SES } from 'aws-sdk';

export class AmazonSESProvider implements IEmailProvider {
  private ses: SES;

  constructor() {
    this.ses = new SES({
      region: process.env.AWS_BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      }
    });
  }

  private getEmailParams(to: string, html: string, subject: string) {
    return {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: html
          }
        },
        Subject: {
          Data: subject,
        },
      },
      Source: process.env.SES_SENDER_EMAIL,
    };
  }

  async accountCreated(to: string, token: string): Promise<void> {
    const link = `${process.env.FRONT_END_URL}/token=${token}`
    const html = `
      <h1 align="center">Conta criada com sucesso !</h1> </br>
      <h2 align="center">Agora para você ter acesso a todas funcionalidades do sistem você precisará confirmar sua conta, Clique <a>AQUI</a> !</h2> </br>
      <a href="${link}">${link}</a>
    `
    const subject = 'Criacão de conta'
    const params = this.getEmailParams(to, html, subject)

    try {
      await this.ses.sendEmail(params).promise();
    } catch (err) {
      throw new HttpException("Email não verificado", HttpStatus.UNAUTHORIZED)
    }

  }
  async sendConfirmToken(to: string, token: string): Promise<void> {
    const link = `${process.env.FRONT_END_URL}/token=${token}`
    const html = `
      <h1 align="center">Token de confirmação gerado com sucesso!</h1> </br>
      <h2 align="center">Clique no link abaixo para confirmar sua conta. !</h2> </br>
      <a href="${link}">${link}</a>
    `
    const subject = 'Confirmação de conta'
    const params = this.getEmailParams(to, html, subject)

    try {
      await this.ses.sendEmail(params).promise();
    } catch (err) {
      throw new HttpException("Email não verificado", HttpStatus.UNAUTHORIZED)
    }
  }
  async accountVerified(to: string): Promise<void> {
    const link = `${process.env.FRONT_END_URL}`
    const html = `
      <h1 align="center">Conta confirmada com sucesso!</h1> </br>
      <h2 align="center">Agora sua conta esta pronta e agora você possui acesso completo ao nosso site, clique no link abaixo: </h2> </br>
      <a href="${link}">${link}</a>
    `
    const subject = 'Confirmação de conta'
    const params = this.getEmailParams(to, html, subject)

    try {
      await this.ses.sendEmail(params).promise();
    } catch (err) {
      throw new HttpException("Email não verificado", HttpStatus.UNAUTHORIZED)
    }
  }

  
}