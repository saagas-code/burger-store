
import { Module } from '@nestjs/common';
import { IDateProvider } from './providers/DateProvider/IDateProvider';
import { DayjsDateProvider } from './providers/DateProvider/implements/DayjsDateProvider';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';
import { IJobMailProvider } from './providers/JobsProvider/IJobMailProvider';
import { MailProvider } from './providers/JobsProvider/implements/MailProvider';
import { SendMailConsumer } from './providers/JobsProvider/Consumers/sendMailConsumer';
import { UserDatabaseModule } from 'src/modules/users/database.module';
import { IEmailProvider } from './providers/EmailProvider/IEmailProvider';
import { MailTrapProvider } from './providers/EmailProvider/implements/MailTrapProvider';
import { EmailProvider } from './providers/EmailProvider/EmailProvider';
import { AmazonSESProvider } from './providers/EmailProvider/implements/AmazonSESProvider';

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
    },
    {
      provide: IEmailProvider,
      useClass: EmailProvider
    },
    {
      provide: 'MailTrapProvider',
      useClass: MailTrapProvider
    },
    {
      provide: 'AmazonSESProvider', 
      useClass: AmazonSESProvider
    },


  ],
  exports: [IDateProvider, IJobMailProvider, MailProvider, IEmailProvider, 'MailTrapProvider', 'AmazonSESProvider']
  
})

export class SharedModule {}