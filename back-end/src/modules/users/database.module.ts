
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { UserRepositoryPrisma } from './database/prisma/repositories/UserRepositoryPrisma';
import { IUsersRepository } from './database/interface/IUsersRepository';
import { IStorageProvider } from './../../shared/providers/StorageProvider/IStorageProvider';
import { S3StorageProvider } from 'src/shared/providers/StorageProvider/implements/S3StorageProvider';
import { IUsersTokenRepository } from './database/interface/IUsersTokenRepository';
import { UserTokenRepositoryPrisma } from './database/prisma/repositories/UserTokenRepository';
import { IQueueProvider } from 'src/shared/providers/QueueProvider/IQueueProvider';
import { RabbitProvider } from 'src/shared/providers/QueueProvider/implements/RabbitProvider';
import { RabbitService } from 'src/instances/rabbitMQ.service';

@Module({
  providers: [
    PrismaService,
    RabbitService,
    {
      provide: IUsersRepository,
      useClass: UserRepositoryPrisma
    },
    {
      provide: IUsersTokenRepository,
      useClass: UserTokenRepositoryPrisma
    },
    {
      provide: IStorageProvider,
      useClass: S3StorageProvider
    },
    {
      provide: IQueueProvider,
      useClass: RabbitProvider
    }
  ],

  exports: [IUsersRepository, IUsersTokenRepository, IStorageProvider, IQueueProvider]
})

export class UserDatabaseModule {}