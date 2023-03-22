
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { UserRepositoryPrisma } from './database/prisma/repositories/UserRepositoryPrisma';
import { IUsersRepository } from './database/implements/IUsersRepository';

@Module({
  providers: [
    PrismaService, 
    {
      provide: IUsersRepository,
      useClass: UserRepositoryPrisma
    },
  ],

  exports: [IUsersRepository]
})

export class UserDatabaseModule {}