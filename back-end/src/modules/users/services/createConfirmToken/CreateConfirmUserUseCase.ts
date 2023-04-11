
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CreateConfirmTokenUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private jwt: JwtService,
  ) {}

  async execute(user_id: string): Promise<void> {
    
    const confirmToken = this.jwt.sign({user_id}, {
      secret: process.env.JWT_CONFIRM_SECRET_KEY,
      expiresIn: process.env.JWT_CONFIRM_TIME
    })

    console.log('confirm Token', confirmToken)
    //FAZER lógica para enviar email retornando o token
  
  }
}