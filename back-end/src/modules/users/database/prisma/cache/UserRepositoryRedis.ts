import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../interface/IUsersRepository';
import { CreateUserDTO } from 'src/modules/users/DTO/CreateUserDTO';
import { UpdateUserDTO } from 'src/modules/users/DTO/UpdateUserDTO';
import { User } from 'src/modules/users/entities/User';
import { RedisService } from 'src/config/redis';
import { findUserByEmail } from 'src/modules/users/helpers/findUserByEmail';
import { findUserById } from 'src/modules/users/helpers/findUserById';

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

      return users
    }

    return JSON.parse(cachedUsers)
  }

  async update(user_id: string, data: UpdateUserDTO): Promise<void> {  
    await this.userRepositoryPrisma.update(user_id, data)
    await this.redis.del("users")
  }

  async findByEmail(email: string): Promise<User> {
    const cachedUsers = await this.redis.get("users")

    if(!cachedUsers) {
      const users = await this.userRepositoryPrisma.list()
      const usersFiltered = findUserByEmail(users, email)

      await this.redis.set(
        "users",
        JSON.stringify(users),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )

      return usersFiltered
    }

    const usersParsed = JSON.parse(cachedUsers)
    const usersFiltered = findUserByEmail(usersParsed, email)
    return usersFiltered
  }

  async findById(id: string): Promise<User> {
    const cachedUsers = await this.redis.get("users")

    if(!cachedUsers) {
      const users = await this.userRepositoryPrisma.list()
      const usersFiltered = findUserById(users, id)

      await this.redis.set(
        "users",
        JSON.stringify(users),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )


      return usersFiltered
    }

    const usersParsed = JSON.parse(cachedUsers)
    const usersFiltered = findUserById(usersParsed, id)
    return usersFiltered
  }

  async findByIdAndDelete(id: string): Promise<void> {
    await this.userRepositoryPrisma.findByIdAndDelete(id)
    await this.redis.del("users")
  }
  
  
  
}