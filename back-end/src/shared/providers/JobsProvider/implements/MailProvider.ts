import { InjectQueue } from "@nestjs/bull";
import { IJobMailProvider } from "../IJobMailProvider";
import { Injectable } from '@nestjs/common';
import { Queue } from "bull";

@Injectable()
export class MailProvider implements IJobMailProvider {
  constructor(
    @InjectQueue('sendMail') private queue: Queue
  ) {}

  async accountCreated(emailTo: string): Promise<void> {
    await this.queue.add("accountCreated", emailTo)
  }
  
}