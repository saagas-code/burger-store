import { Module } from '@nestjs/common';
import { ProductDatabaseModule } from './modules/products/database.module';
import { ProductHttpModule } from './modules/products/http.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserDatabaseModule } from './modules/users/database.module';
import { UserHttpModule } from './modules/users/http.module';
import { SharedModule } from './shared/shared.module';
import { PrismaClient } from '@prisma/client';
import { OrderDatabaseModule } from './modules/orders/database.module';
import { OrderHttpModule } from './modules/orders/http.module';
import { NotificationDatabaseModule } from './modules/notifications/database.module';
import { NotificationHttpModule } from './modules/notifications/http.module';

@Module({
  imports: [
    OrderDatabaseModule,
    OrderHttpModule,
    ProductDatabaseModule,
    ProductHttpModule,
    UserDatabaseModule,
    UserHttpModule,
    NotificationDatabaseModule,
    NotificationHttpModule,
    SharedModule,
    // RedisService,
    
    // static files
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    //Bulll

    

  ],

  providers: [
    {
      provide: PrismaClient,
      useFactory: () => {
        const prisma = new PrismaClient({
          log: ["query"],
        })
        prisma.$connect();
        return prisma;
      }
    },
    // {
    //   provide: IEmailProvider,
    //   useClass: AmazonSESProvider
    // }
  ]
})
export class AppModule {}
  // constructor (
  //   @InjectQueue("sendMail") private sendMailQueue: Queue
  // ) {}

  // configure(consumer: MiddlewareBuilder) {
  //   const  {router} = createBullBoard([
  //     new BullAdapter(this.sendMailQueue)
  //   ]);
  //   consumer.apply(router).forRoutes("/admin/queues")
  // }

// }
