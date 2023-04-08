
import { Module } from '@nestjs/common';
import { CreateNotificationController } from './services/createNotification/CreateNotificationController';
import { CreateNotificationUseCase } from './services/createNotification/CreateNotificationUseCase';
import { UserDatabaseModule } from '../users/database.module';
import { NotificationDatabaseModule } from './database.module';
import { ListMyNotificationController } from './services/listMyNotification/ListMyNotificationController';
import { ListMyNotificationUseCase } from './services/listMyNotification/ListMyNotificationUseCase';



@Module({
  imports: [
    NotificationDatabaseModule,
    UserDatabaseModule
  ],
  controllers: [
    CreateNotificationController,
    ListMyNotificationController
    
  ],
  providers: [
    CreateNotificationUseCase,
    ListMyNotificationUseCase
    
  ],
  exports: []
  
})

export class NotificationHttpModule {}