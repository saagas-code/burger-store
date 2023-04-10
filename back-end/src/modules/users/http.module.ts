
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
import { AuthUserController } from './services/auth/AuthUserController';
import { AuthUserUseCase } from './services/auth/AuthUserUseCase';
import { SharedModule } from 'src/shared/shared.module';
import { NotificationDatabaseModule } from '../notifications/database.module';
import { AccessTokenStrategy } from 'src/common/strategy/AccessTokenStrategy';
import { RefreshTokenStrategy } from 'src/common/strategy/RefreshTokenStrategy';
import { RefreshTokenController } from './services/refreshToken/RefreshTokenController';
import { RefreshTokenUseCase } from './services/refreshToken/RefreshTokenUseCase';


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

    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {expiresIn: process.env.JWT_ACCESS_TIME}
    }),
    JwtModule.register({
      secret: process.env.JWT_REFRESH_SECRET_KEY,
      signOptions: {expiresIn: process.env.JWT_REFRESH_TIME}
    })
  ],
  controllers: [
    CreateUserController,
    ListUserController,
    DeleteUserController,
    AuthUserController,
    RefreshTokenController,
    
  ],
  providers: [
    CreateUserUseCase,
    ListUserUseCase,
    DeleteUserUseCase,

    AuthUserUseCase,
    RefreshTokenUseCase,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    
    
  ],
  exports: [
    PassportModule, 
    AccessTokenStrategy,
    RefreshTokenStrategy
  ]
  
})

export class UserHttpModule {}