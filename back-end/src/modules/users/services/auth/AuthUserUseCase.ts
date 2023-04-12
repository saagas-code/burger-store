
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { AuthUserDTO } from '../../DTO/AuthUserDTO';
import { compare } from "bcrypt";
import { EmailOrPassWrong } from './../../errors/EmailOrPassWrong';
import { JwtService } from '@nestjs/jwt';
import { IDateProvider } from 'src/shared/providers/DateProvider/IDateProvider';
import { IUsersTokenRepository } from '../../database/interface/IUsersTokenRepository';
import { UserNotExists } from '../../errors/UserNotExists';


interface IResponse {
  access_token: string,
  refresh_token: string
}

@Injectable()
export class AuthUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private userTokenRepository: IUsersTokenRepository,
    private jwt: JwtService,
    private dayjsDateProvider: IDateProvider
  ) {}

  async execute({email, password}: AuthUserDTO): Promise<IResponse> {
    

    const user = await this.userRepository.findByEmail(email)

    if(!user) {
      throw new EmailOrPassWrong()
    }

    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) {
      throw new EmailOrPassWrong()
    }

    const access_token =  this.jwt.sign({user_id: user.id}, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.JWT_ACCESS_TIME
    })

    const refresh_token =  this.jwt.sign({user_id: user.id}, {
      secret: process.env.JWT_REFRESH_SECRET_KEY,
      expiresIn: process.env.JWT_REFRESH_TIME
    })

    const refresh_token_expires_date = this.dayjsDateProvider.addDays(30)
    
    await this.userTokenRepository.createUserToken({
      user_id: user.id,
      refresh_token,
      expires_date: refresh_token_expires_date
    })

    return {
      access_token,
      refresh_token
    }
    
  }
}