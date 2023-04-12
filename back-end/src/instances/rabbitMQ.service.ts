import { RabbitProvider } from "src/shared/providers/QueueProvider/implements/RabbitProvider";
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';

// export async function RabbitMQService(credentials: string): Promise<any> {
//   const rabbitMQService = new RabbitProvider(credentials);
//   await rabbitMQService.connect();
//   return rabbitMQService;
// }

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