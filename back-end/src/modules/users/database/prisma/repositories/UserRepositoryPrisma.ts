
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/instances/prisma.service';
import { CreateTokenDTO } from 'src/modules/users/DTO/CreateTokenDTO';
import { CreateUserDTO } from 'src/modules/users/DTO/CreateUserDTO';
import { UpdateUserDTO } from 'src/modules/users/DTO/UpdateUserDTO';
import { User } from 'src/modules/users/entities/User';
import { IUsersRepository } from './../../implements/IUsersRepository';

@Injectable()
export class UserRepositoryPrisma implements IUsersRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  
  async list(): Promise<User[]> {
    const user = await this.prisma.user.findMany()
    return user;
  }
  
  async create(data: CreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: data
    })
  }
  async update(user_id: string, data: UpdateUserDTO): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: user_id
      },
      data
    })
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    })
    return user
  }
  async findById(user_id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: user_id
      }
    })
    return user
  }

  async findByIdAndDelete(user_id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: user_id
      }
    })
  }

  async createUserToken(data: any): Promise<void> {
    await this.prisma.userToken.create({
      data: data
    })
  }
  
}