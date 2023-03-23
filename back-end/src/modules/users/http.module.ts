
import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './services/createUser/CreateUserUseCase';
import { CreateUserController } from './services/createUser/CreateUserController';
import { UserDatabaseModule } from './database.module';
import { ListUserController } from './services/list/ListUserController';
import { ListUserUseCase } from './services/list/ListUserUseCase';
import { DeleteUserController } from './services/delete/DeleteUserController';
import { DeleteUserUseCase } from './services/delete/DeleteUserUseCase';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { AuthUserController } from './services/auth/AuthUserController';
import { AuthUserUseCase } from './services/auth/AuthUserUseCase';

@Module({
  imports: [
    UserDatabaseModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || '8819',
      signOptions: {
        expiresIn: 3600
      }
    })
  ],
  controllers: [
    CreateUserController,
    ListUserController,
    DeleteUserController,

    AuthUserController
    
  ],
  providers: [
    CreateUserUseCase,
    ListUserUseCase,
    DeleteUserUseCase,

    AuthUserUseCase,
    JwtStrategy
    
  ],
  exports: [JwtStrategy, PassportModule]
  
})

export class UserHttpModule {}