
import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './services/createUser/CreateUserUseCase';
import { CreateUserController } from './services/createUser/CreateUserController';
import { UserDatabaseModule } from './database.module';

@Module({
  imports: [
    UserDatabaseModule,
  ],
  controllers: [
    CreateUserController,
    
  ],
  providers: [
    CreateUserUseCase,
    
  ],
  exports: []
  
})

export class UserHttpModule {}