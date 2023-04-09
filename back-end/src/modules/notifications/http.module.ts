
  import { Module } from '@nestjs/common';
import { CreateNotificationController } from './services/createNotification/CreateNotificationController';
import { CreateNotificationUseCase } from './services/createNotification/CreateNotificationUseCase';
import { UserDatabaseModule } from '../users/database.module';
import { NotificationDatabaseModule } from './database.module';
import { ListMyNotificationController } from './services/listMyNotification/ListMyNotificationController';
import { ListMyNotificationUseCase } from './services/listMyNotification/ListMyNotificationUseCase';
import { DeleteNotificationController } from './services/deleteNotification/DeleteNotificationController';
import { DeleteNotificationUseCase } from './services/deleteNotification/DeleteNotificationUseCase';



@Module({
  imports: [
    NotificationDatabaseModule,
    UserDatabaseModule
    ],
  controllers: [
    CreateNotificationController,
    ListMyNotificationController,
    DeleteNotificationController   
  ],
  providers: [
    CreateNotificationUseCase,
    ListMyNotificationUseCase,
    DeleteNotificationUseCase
    
  ],
  exports: []
  
})

export class NotificationHttpModule {}