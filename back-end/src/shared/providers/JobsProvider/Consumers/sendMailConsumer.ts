import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { IEmailProvider } from "src/shared/providers/EmailProvider/IEmailProvider";

interface IPayload {
  emailTo: string,
  token: string
}

@Processor('sendMail')
export class SendMailConsumer {
  constructor(
    private emailProvider: IEmailProvider
  ) {}

  @Process("accountCreated")
  async sendMail(job: Job<IPayload>) {
    const {emailTo, token} = job.data;
    await this.emailProvider.accountCreated(emailTo, token)
  }
}