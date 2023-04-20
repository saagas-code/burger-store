import { Inject } from '@nestjs/common';
import { RedisService } from 'src/config/redis';
import { IUsersTokenRepository } from '../../interface/IUsersTokenRepository';
import { UserToken } from 'src/modules/users/entities/UserToken';
import { findTokenByRefreshAndUserId } from 'src/modules/users/helpers/findTokenByRefreshAndUserId';


class UserTokenRepositoryRedis implements IUsersTokenRepository {
  constructor(
    private redis: RedisService,
    @Inject("IUsersTokenRepository")
    private userRepositoryTokenPrisma: IUsersTokenRepository
  ) {}

  async createUserToken(data: any): Promise<void> {
    await this.userRepositoryTokenPrisma.createUserToken(data)
    await this.redis.del("tokens")
  }

  async list(): Promise<UserToken[]> {
    const cachedTokens = await this.redis.get("tokens");

    
    if(!cachedTokens) {
      const tokens = await this.userRepositoryTokenPrisma.list()

      await this.redis.set(
        "tokens",
        JSON.stringify(tokens),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      console.log("db")
      return tokens;
    }
    console.log("cache")
    const tokensParsed = JSON.parse(cachedTokens)
    return tokensParsed
  }

  async findTokenByUserIdAndRefreshToken(refresh_token: string): Promise<UserToken> {
    const cachedTokens = await this.redis.get("tokens");

    if(!cachedTokens) {
      const tokens = await this.userRepositoryTokenPrisma.list()
      const tokensFiltered = findTokenByRefreshAndUserId(tokens, refresh_token)

      await this.redis.set(
        "tokens",
        JSON.stringify(tokens),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )

      return tokensFiltered;
    }
    
    const tokensParsed = JSON.parse(cachedTokens)
    const tokensFiltered = findTokenByRefreshAndUserId(tokensParsed, refresh_token)
    return tokensFiltered
  }
  
  async deleteById(token_id: any): Promise<void> {
    await this.userRepositoryTokenPrisma.deleteById(token_id)
    await this.redis.del("tokens")

  }

}

export {UserTokenRepositoryRedis}