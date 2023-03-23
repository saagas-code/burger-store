
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/implements/IUsersRepository';
import { AuthUserDTO } from '../../DTO/AuthUserDTO';
import { compare } from "bcrypt";
import { EmailOrPassWrong } from './../../errors/EmailOrPassWrong';
import { JwtService } from '@nestjs/jwt';

interface IResponse {
  access_token: string,
  refresh_token: string
}

@Injectable()
export class AuthUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private jwt: JwtService
  ) {}

  async execute({email, password}: AuthUserDTO): Promise<IResponse> {
    
    const user = await this.userRepository.findByEmail(email)

    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) {
      throw new EmailOrPassWrong()
    }

    const access_token =  this.jwt.sign({user_id: user.id}, {
      expiresIn: process.env.JWT_ACCESS_TIME
    })

    const refresh_token =  this.jwt.sign({user_id: user.id}, {
      expiresIn: process.env.JWT_REFRESH_TIME
    })

    return {
      access_token,
      refresh_token
    }


    
  }
}