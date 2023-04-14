import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { IEmailProvider } from "src/shared/providers/EmailProvider/IEmailProvider";

@Processor('sendMail')
export class SendMailConsumer {
  constructor(
    private emailProvider: IEmailProvider
  ) {}

  @Process("accountCreated")
  async sendMail(job: Job<any>) {
    const {data} = job;
    console.log("FILAAAAAAAA")
    await this.emailProvider.send(data)
  }
}