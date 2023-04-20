
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IDateProvider } from 'src/shared/providers/DateProvider/IDateProvider';
import { IUsersTokenRepository } from '../../database/interface/IUsersTokenRepository';
import { RefreshTokenInvalid } from '../../errors/RefreshTokenInvalid';


interface IResponse {
  access_token: string,
  refresh_token: string
}

@Injectable()
export class RefreshTokenUseCase {
  constructor(
    private userTokenRepository: IUsersTokenRepository,
    private jwt: JwtService,
    private dayjsDateProvider: IDateProvider
  ) {}

  async execute(token: string, user_id: string): Promise<IResponse> {

    const userToken = await this.userTokenRepository.findTokenByUserIdAndRefreshToken(
      token
    )


    if(!userToken) {
      throw new RefreshTokenInvalid()
    }

    await this.userTokenRepository.deleteById(userToken.id)

    const new_access_token = this.jwt.sign({user_id: userToken.user_id}, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.JWT_ACCESS_TIME
    })

    const new_refresh_token = this.jwt.sign({user_id: userToken.user_id}, {
      secret: process.env.JWT_REFRESH_SECRET_KEY,
      expiresIn: process.env.JWT_REFRESH_TIME
    })

    const refresh_token_expires_date = this.dayjsDateProvider.addDays(30)
    
    await this.userTokenRepository.createUserToken({
      user_id: userToken.user_id,
      refresh_token: new_refresh_token,
      expires_date: refresh_token_expires_date
    })

    return {
      access_token: new_access_token,
      refresh_token: new_refresh_token
    }
  }
}