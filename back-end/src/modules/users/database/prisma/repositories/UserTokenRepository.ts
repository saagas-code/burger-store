
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/instances/prisma.service';
import { UserToken } from 'src/modules/users/entities/UserToken';
import { IUsersTokenRepository } from '../../interface/IUsersTokenRepository';

@Injectable()
export class UserTokenRepositoryPrisma implements IUsersTokenRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async list(): Promise<UserToken[]> {
    const tokens = await this.prisma.userToken.findMany()
    return tokens
  }

  async findTokenByUserIdAndRefreshToken(token: string): Promise<UserToken> {
    const userToken = await this.prisma.userToken.findFirst({
      where: {
        refresh_token: token,
      }
    })

    return userToken
  }

  async deleteById(token_id: any): Promise<void> {
    await this.prisma.userToken.delete({
      where: {
        id: token_id
      }
    })
  }
  
  async createUserToken(data: any): Promise<void> {
    await this.prisma.userToken.create({
      data: data
    })
  }
}