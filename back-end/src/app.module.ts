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
import { MulterModule } from '@nestjs/platform-express';
import * as multerS3 from 'multer-s3';
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
    }
  ]
})
export class AppModule {}
