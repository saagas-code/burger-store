
import { Module } from '@nestjs/common';
import { IDateProvider } from './providers/DateProvider/IDateProvider';
import { DayjsDateProvider } from './providers/DateProvider/implements/DayjsDateProvider';
import { BullModule, InjectQueue } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';
import { IJobMailProvider } from './providers/JobsProvider/IJobMailProvider';
import { MailProvider } from './providers/JobsProvider/implements/MailProvider';
import { SendMailConsumer } from './providers/JobsProvider/Consumers/sendMailConsumer';
import { UserDatabaseModule } from 'src/modules/users/database.module';
import { BullAdapter } from 'bull-board/bullAdapter'
import { createBullBoard } from 'bull-board';
import { MiddlewareBuilder } from '@nestjs/core';
import { Queue } from 'bull';


@Module({
  imports: [
    BullModule,
    UserDatabaseModule,

    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      }
    }),

    BullModule.registerQueue({
      name: 'sendMail',
    }),

  ],


  providers: [
    SendMailConsumer,
    MailProvider,
    {
      provide: IDateProvider,
      useClass: DayjsDateProvider
    },
    {
      provide: IJobMailProvider,
      useClass: MailProvider
    }

  ],
  exports: [IDateProvider, IJobMailProvider, MailProvider]
  
})

export class SharedModule {
    constructor (
      @InjectQueue("sendMail") private sendMailQueue: Queue
    ) {}
  
    configure(consumer: MiddlewareBuilder) {
      const  {router} = createBullBoard([
        new BullAdapter(this.sendMailQueue)
      ]);
      consumer.apply(router).forRoutes("/admin/queues")
    }
  
}