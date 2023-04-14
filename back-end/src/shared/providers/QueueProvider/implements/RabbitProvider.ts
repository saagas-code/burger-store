// import { Injectable } from "@nestjs/common";
// import { IQueueProvider } from "../IQueueProvider";
// import { Message } from 'amqplib';
// import { RabbitService } from "src/instances/rabbitMQ.service";

// @Injectable()
// export class RabbitProvider implements IQueueProvider {
//   constructor(
//     private rabbit: RabbitService,
//   ) {}

//   async publishInQueue(queueName: string, message: string, topic: string): Promise<void> {
//     await this.rabbit.getChannel().assertQueue(queueName);

//     const payload = Buffer.from(JSON.stringify({
//       pattern: queueName,
//       data: message
//     }))

//     await this.rabbit.getChannel().sendToQueue(queueName, payload, {
//       headers: {
//         topic: topic
//       }
//     })

//     // await this.rabbit.getChannel().sendToQueue(queueName, Buffer.from(message), {
//     //   headers: {
//     //     topic: topic
//     //   }
//     // });
//   }

//   async publishInExchange(exchange: string, routingKey: string, message: string): Promise<boolean> {
//     return await this.rabbit.getChannel().publish(exchange, routingKey, Buffer.from(message))
//   }
// s
//   async consume(queueName: string): Promise<void> {
//     // await this.rabbit.getChannel().assertQueue(queueName);
//     await this.rabbit.getChannel().consume(queueName, (message: Message) => {
//       this.rabbit.getChannel().ack(message);
//     });
//   }
  
// }