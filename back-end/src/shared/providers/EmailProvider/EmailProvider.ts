import { Inject, Injectable } from "@nestjs/common";
import { IEmailProvider } from "./IEmailProvider";
import { AmazonSESProvider } from "./implements/AmazonSESProvider";
import { MailTrapProvider } from "./implements/MailTrapProvider";



@Injectable()
export class EmailProvider implements IEmailProvider {
  private emailProvider: IEmailProvider;

  constructor(
    @Inject('MailTrapProvider')
    private readonly mailTrapEmailProvider: MailTrapProvider,
    @Inject('AmazonSESProvider')
    private readonly amazonEmailProvider: AmazonSESProvider
  ) {
    const emailProvider = process.env.EMAIL_PROVIDER;

    if(emailProvider === 'mailtrap') {
      this.emailProvider = this.mailTrapEmailProvider;
    }
    if(emailProvider === 'amazonses') {
      this.emailProvider = this.amazonEmailProvider
    }
  }

  accountCreated(to: string, token: string): Promise<void> {
    return this.emailProvider.accountCreated(to, token)
  }

  sendConfirmToken(emailTo: string, token: string): Promise<void> {
    return this.emailProvider.sendConfirmToken(emailTo, token)
  }

  accountVerified(emailTo: string): Promise<void> {
    return this.emailProvider.accountVerified(emailTo)
  }
}