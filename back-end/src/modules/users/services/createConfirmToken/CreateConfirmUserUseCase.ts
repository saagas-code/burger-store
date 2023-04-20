
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { JwtService } from '@nestjs/jwt';
import { IJobMailProvider } from 'src/shared/providers/JobsProvider/IJobMailProvider';

@Injectable()
export class CreateConfirmTokenUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private emailProvider: IJobMailProvider,
    private jwt: JwtService,
  ) {}

  async execute(user_id: string): Promise<void> {

    const user = await this.userRepository.findById(user_id)

    const confirmToken = this.jwt.sign({
      user_id
    }, {
      secret: process.env.JWT_CONFIRM_SECRET_KEY,
      expiresIn: process.env.JWT_CONFIRM_TIME
    })

    console.log('confirm Token', confirmToken)
    //FAZER lógica para enviar email retornando o token

    await this.emailProvider.sendConfirmTokenJob(user.email, confirmToken)
  
  }
}