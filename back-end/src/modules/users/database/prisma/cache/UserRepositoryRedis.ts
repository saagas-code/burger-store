import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../interface/IUsersRepository';
import { CreateUserDTO } from 'src/modules/users/DTO/CreateUserDTO';
import { UpdateUserDTO } from 'src/modules/users/DTO/UpdateUserDTO';
import { User } from 'src/modules/users/entities/User';
import { RedisService } from 'src/config/redis';

@Injectable()
export class UserRepositoryRedis implements IUsersRepository {
  constructor(
    private readonly redis: RedisService,
    @Inject('IUsersRepository')
    private readonly userRepositoryPrisma: IUsersRepository
  ) {}
  async create(data: CreateUserDTO): Promise<User> {

    const user = await this.userRepositoryPrisma.create(data)
    await this.redis.del("users")

    return user
  }

  async list(): Promise<User[]> {
    const cachedUsers = await this.redis.get("users");

    if(!cachedUsers) {
      const users = await this.userRepositoryPrisma.list();

      await this.redis.set(
        "users",
        JSON.stringify(users),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      console.log("\x1b[3m%s\x1b[0m', 'From Database");

      return users
    }

    console.log('\x1b[36m%s\x1b[0m', 'From Cache')
    return JSON.parse(cachedUsers)
  }

  async update(user_id: string, data: UpdateUserDTO): Promise<void> {
    await this.userRepositoryPrisma.update(user_id, data)
    await this.redis.del("users")
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepositoryPrisma.findByEmail(email)
    await this.redis.del("users")

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepositoryPrisma.findById(id)
    await this.redis.del("users")

    return user
  }

  async findByIdAndDelete(id: string): Promise<void> {
    await this.userRepositoryPrisma.findByIdAndDelete(id)
    await this.redis.del("users")
  }
  
  
  
}