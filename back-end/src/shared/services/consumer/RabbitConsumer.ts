
// import { Injectable } from '@nestjs/common';
// import { RabbitMQProvider } from '@nestjs-plus/rabbitmq';

// @Injectable()
// export class RabbitConsumerService {
//   constructor(private readonly rabbit: RabbitMQProvider) {}

//   async onModuleInit() {
//     await this.rabbit.init();
//     await this.rabbit.getChannel().assertQueue('burger-store-emails', {
//       durable: true,
//     });
//     await this.rabbit.getChannel().consume(
//       'burger-store-emails',
//       (message) => {
//         if (message !== null) {
//           console.log(message.content.toString());
//           this.rabbit.getChannel().ack(message);
//         }
//       },
//       { noAck: false },
//     );
//   }
// }