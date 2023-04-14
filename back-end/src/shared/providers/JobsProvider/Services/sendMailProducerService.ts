import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import {Queue} from 'bull'


@Injectable()
export class SendMailProducerService {
  constructor(
    @InjectQueue('sendMail') private queue: Queue
  ) {}

  async sendMail(to: string) {
    await this.queue.add("accountCreated", to)
  }
}