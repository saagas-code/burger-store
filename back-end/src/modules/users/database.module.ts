
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { UserRepositoryPrisma } from './database/prisma/repositories/UserRepositoryPrisma';
import { IUsersRepository } from './database/interface/IUsersRepository';
import { IStorageProvider } from './../../shared/providers/StorageProvider/IStorageProvider';
import { S3StorageProvider } from 'src/shared/providers/StorageProvider/implements/S3StorageProvider';
import { IUsersTokenRepository } from './database/interface/IUsersTokenRepository';
import { UserTokenRepositoryPrisma } from './database/prisma/repositories/UserTokenRepository';

@Module({
  providers: [
    PrismaService, 
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
    }
  ],

  exports: [IUsersRepository, IUsersTokenRepository, IStorageProvider]
})

export class UserDatabaseModule {}