
import { Module } from '@nestjs/common';
import { CreateNotificationController } from './services/createNotification/CreateNotificationController';
import { CreateNotificationUseCase } from './services/createNotification/CreateNotificationUseCase';
import { UserDatabaseModule } from '../users/database.module';
import { NotificationDatabaseModule } from './database.module';



@Module({
  imports: [
    NotificationDatabaseModule,
    UserDatabaseModule
  ],
  controllers: [
    CreateNotificationController,
    
  ],
  providers: [
    CreateNotificationUseCase,
    
  ],
  exports: []
  
})

export class NotificationHttpModule {}