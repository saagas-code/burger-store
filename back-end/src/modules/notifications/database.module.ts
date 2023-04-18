
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { INotificationRepository } from './database/interface/INotificationRepository';
import { NotificationRepositoryPrisma } from './database/prisma/repositories/NotificationRepository';
import { NotificationRepositoryCache } from './database/prisma/repositories/NotificationRepositoryCache';
import { RedisService } from 'src/config/redis';

@Module({
  providers: [
    PrismaService,
    RedisService,
    {
      provide: 'INotificationRepository',
      useClass: NotificationRepositoryPrisma
    },
    {
      provide: INotificationRepository,
      useClass: NotificationRepositoryCache
    },
  ],

  exports: ['INotificationRepository', INotificationRepository]
})

export class NotificationDatabaseModule {}