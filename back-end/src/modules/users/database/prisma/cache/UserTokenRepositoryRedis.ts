// import { Inject } from '@nestjs/common';
// import { RedisService } from 'src/config/redis';
// import { IUsersTokenRepository } from '../../interface/IUsersTokenRepository';
// import { UserToken } from 'src/modules/users/entities/UserToken';


// class UserTokenRepositoryRedis implements IUsersTokenRepository {
//   constructor(
//     private redis: RedisService,
//     @Inject("IUsersRepository")
//     private userRepositoryTokenPrisma: IUsersTokenRepository
//   ) {}

//   async createUserToken(data: any): Promise<void> {
//     await this.userRepositoryTokenPrisma.createUserToken(data)
//     await this.redis.del("tokens")
//   }

//   async findTokenByUserIdAndRefreshToken(refresh_token: string, user_id: string): Promise<UserToken> {
//     const cachedTokens = await this.redis.get("tokens");

//     if(!cachedTokens) {
//       const users = await this.userRepositoryTokenPrisma.

//       await this.redis.set(
//         "users",
//         JSON.stringify(users),
//         "EX",
//         "60" // VALOR EM SEGUNDOS
//       )
//       console.log("\x1b[3m%s\x1b[0m', 'From Database");

//       return users
//     }
//   }
  
//   async deleteById(token_id: any): Promise<void> {
//     await this.userRepositoryTokenPrisma.deleteById(token_id)
//     await this.redis.del("tokens")

//   }

  

// }

// export {UserTokenRepositoryRedis}