
import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './services/createUser/CreateUserUseCase';
import { CreateUserController } from './services/createUser/CreateUserController';
import { UserDatabaseModule } from './database.module';
import { ListUserController } from './services/list/ListUserController';
import { ListUserUseCase } from './services/list/ListUserUseCase';

@Module({
  imports: [
    UserDatabaseModule,
  ],
  controllers: [
    CreateUserController,
    ListUserController
    
  ],
  providers: [
    CreateUserUseCase,
    ListUserUseCase
    
  ],
  exports: []
  
})

export class UserHttpModule {}