import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { Observable } from 'rxjs';

@Injectable()
export class RabbitService implements OnModuleInit {
  private channel: any;
  
  async onModuleInit() {
    const conn = await amqp.connect(process.env.RABBIT_URL)
    this.channel = await conn.createChannel();
  }

  getChannel() {
    return this.channel;
  }
}