
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { INotificationRepository } from './database/interface/INotificationRepository';
import { NotificationRepositoryPrisma } from './database/prisma/repositories/NotificationRepository';

@Module({
  providers: [
    PrismaService, 
    {
      provide: INotificationRepository,
      useClass: NotificationRepositoryPrisma
    },
  ],

  exports: [INotificationRepository]
})

export class NotificationDatabaseModule {}