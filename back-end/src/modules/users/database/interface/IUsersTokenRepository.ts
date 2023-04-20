import { UserToken } from "../../entities/UserToken";

export abstract class IUsersTokenRepository {
  abstract list(): Promise<UserToken[]>
  abstract createUserToken(data: any): Promise<void>
  abstract findTokenByUserIdAndRefreshToken(refresh_token: string, user_id: string): Promise<UserToken>
  abstract deleteById(token_id): Promise<void>
}