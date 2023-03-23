
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/implements/IUsersRepository';
import { AuthUserDTO } from '../../DTO/AuthUserDTO';
import { compare } from "bcrypt";
import { EmailOrPassWrong } from './../../errors/EmailOrPassWrong';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private jwt: JwtService
  ) {}

  async execute({email, password}: AuthUserDTO): Promise<string> {
    
    const user = await this.userRepository.findByEmail(email)

    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) {
      throw new EmailOrPassWrong()
    }

    const token =  this.jwt.sign({user_id: user.id}, {
      expiresIn: 3600
    })

    return token


    
  }
}