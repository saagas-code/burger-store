
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../interface/IUsersRepository';
import { CreateUserDTO } from 'src/modules/users/DTO/CreateUserDTO';
import { UpdateUserDTO } from 'src/modules/users/DTO/UpdateUserDTO';
import { User } from 'src/modules/users/entities/User';
import { RedisService } from 'src/config/redis';
import { PrismaService } from 'src/instances/prisma.service';
import { IUsersRepositoryCache } from '../../interface/IUsersRepositoryCache';


@Injectable()
export class UserRepositoryRedis implements IUsersRepositoryCache {
  constructor(
    private readonly redis: RedisService,
    private readonly userRepositoryPrisma: IUsersRepository
  ) {}
  
  async list(): Promise<User[]> {
    const cachedUsers = await this.redis.get("users");

    if(!cachedUsers) {
      const users = await this.userRepositoryPrisma.list();

      await this.redis.set(
        "users",
        JSON.stringify(users),
        "EX",
        "15" // VALOR EM SEGUNDOS
      )
      // console.log("\x1b[3m%s\x1b[0m', 'From Database");

      return users
    }

    // console.log('\x1b[36m%s\x1b[0m', 'From Cache')
    return JSON.parse(cachedUsers)
  }
  
}