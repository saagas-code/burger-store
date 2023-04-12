import { Injectable } from "@nestjs/common";
import { IQueueProvider } from "../IQueueProvider";
import { Message } from 'amqplib';
import { RabbitService } from "src/instances/rabbitMQ.service";

@Injectable()
export class RabbitProvider implements IQueueProvider {
  constructor(
    private rabbit: RabbitService,
  ) {}

  async publishInQueue(queueName: string, message: string): Promise<void> {
    console.log("teste")
    await this.rabbit.getChannel().assertQueue(queueName);
    await this.rabbit.getChannel().sendToQueue(queueName, Buffer.from(message));
  }

  async publishInExchange(exchange: string, routingKey: string, message: string): Promise<boolean> {
    return await this.rabbit.getChannel().publish(exchange, routingKey, Buffer.from(message))
  }

  async receive(queueName: string): Promise<void> {
    await this.rabbit.getChannel().assertQueue(queueName);
    await this.rabbit.getChannel().consume(queueName, (msg: Message) => {
      if (msg !== null) {
        console.log(msg.content.toString());
      }
    });
  }
  
}