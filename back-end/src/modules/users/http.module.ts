
import { CacheModule, Module } from '@nestjs/common';
import { CreateUserUseCase } from './services/createUser/CreateUserUseCase';
import { CreateUserController } from './services/createUser/CreateUserController';
import { UserDatabaseModule } from './database.module';
import { ListUserController } from './services/list/ListUserController';
import { ListUserUseCase } from './services/list/ListUserUseCase';
import { DeleteUserController } from './services/delete/DeleteUserController';
import { DeleteUserUseCase } from './services/delete/DeleteUserUseCase';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthUserController } from './services/auth/AuthUserController';
import { AuthUserUseCase } from './services/auth/AuthUserUseCase';
import { SharedModule } from 'src/shared/shared.module';
import { NotificationDatabaseModule } from '../notifications/database.module';
import { AccessTokenStrategy } from 'src/shared/strategy/AccessTokenStrategy';
import { RefreshTokenStrategy } from 'src/shared/strategy/RefreshTokenStrategy';
import { ConfirmAccountTokenStrategy } from 'src/shared/strategy/ConfirmAccountTokenStrategy';

import { RefreshTokenController } from './services/refreshToken/RefreshTokenController';
import { RefreshTokenUseCase } from './services/refreshToken/RefreshTokenUseCase';
import { ConfirmUserController } from './services/confirmUser/ConfirmUserController';
import { ConfirmUserUseCase } from './services/confirmUser/ConfirmUserUseCase';
import { CreateConfirmTokenUseCase } from './services/createConfirmToken/CreateConfirmUserUseCase';
import { CreateConfirmTokenController } from './services/createConfirmToken/CreateConfirmUserController';


@Module({
  imports: [
    UserDatabaseModule,
    NotificationDatabaseModule,
    SharedModule,

    PassportModule.register({defaultStrategy: 'access-token'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || '8819'
    }),
    PassportModule.register({defaultStrategy: 'refresh-token'}),
    JwtModule.register({
      secret: process.env.JWT_REFRESH_SECRET_KEY || '8820'
    }),
    PassportModule.register({defaultStrategy: 'confirm-token'}),
    JwtModule.register({
      secret: process.env.JWT_CONFIRM_SECRET_KEY || '8821'
    }),
  ],
  controllers: [
    CreateUserController,
    ListUserController,
    DeleteUserController,
    AuthUserController,
    RefreshTokenController,
    ConfirmUserController,
    CreateConfirmTokenController,
  ],
  providers: [
    CreateUserUseCase,
    ListUserUseCase,
    DeleteUserUseCase,
    ConfirmUserUseCase,
    CreateConfirmTokenUseCase,

    AuthUserUseCase,
    RefreshTokenUseCase,

    AccessTokenStrategy,
    RefreshTokenStrategy,
    ConfirmAccountTokenStrategy,
    
    
  ],
  exports: [
    PassportModule, 
    AccessTokenStrategy,
    RefreshTokenStrategy,
    ConfirmAccountTokenStrategy,
  ]
  
})

export class UserHttpModule {}