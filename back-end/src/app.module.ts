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
import { RabbitService } from './instances/rabbitMQ.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { IEmailProvider } from './shared/providers/EmailProvider/IEmailProvider';
import { NodemailerProvider } from './shared/providers/EmailProvider/implements/NodemailerProvider';

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
    
    // static files
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

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
    {
      provide: IEmailProvider,
      useClass: NodemailerProvider
    }
  ]
})
export class AppModule {}
