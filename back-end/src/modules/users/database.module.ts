
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { UserRepositoryPrisma } from './database/prisma/repositories/UserRepositoryPrisma';
import { IUsersRepository } from './database/interface/IUsersRepository';
import { IStorageProvider } from './../../shared/providers/StorageProvider/IStorageProvider';
import { S3StorageProvider } from 'src/shared/providers/StorageProvider/implements/S3StorageProvider';
import { IUsersTokenRepository } from './database/interface/IUsersTokenRepository';
import { UserTokenRepositoryPrisma } from './database/prisma/repositories/UserTokenRepository';
import { IEmailProvider } from 'src/shared/providers/EmailProvider/IEmailProvider';
import { UserRepositoryRedis } from './database/prisma/cache/UserRepositoryRedis';
import { RedisService } from 'src/config/redis';
import { UserTokenRepositoryRedis } from './database/prisma/cache/UserTokenRepositoryRedis';
import { MailTrapProvider } from 'src/shared/providers/EmailProvider/implements/MailTrapProvider';

@Module({
  providers: [
    PrismaService,
    RedisService,
    {
      provide: 'IUsersRepository',
      useClass: UserRepositoryPrisma
    },
    {
      provide: IUsersRepository,
      useClass: UserRepositoryRedis
    },
    {
      provide: 'IUsersTokenRepository',
      useClass: UserTokenRepositoryPrisma
    },
    {
      provide: IUsersTokenRepository,
      useClass: UserTokenRepositoryRedis
    },
    {
      provide: IStorageProvider,
      useClass: S3StorageProvider
    },
    {
      provide: IEmailProvider,
      useClass: MailTrapProvider
    }

  ],

  exports: ['IUsersRepository', IUsersRepository, 'IUsersTokenRepository', IUsersTokenRepository, IStorageProvider, IEmailProvider]
})

export class UserDatabaseModule {}