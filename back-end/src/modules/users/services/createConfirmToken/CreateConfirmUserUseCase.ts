
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { JwtService } from '@nestjs/jwt';
import { IJobMailProvider } from 'src/shared/providers/JobsProvider/IJobMailProvider';
import { UserAlreadyVerified } from '../../errors/UserAlreadyVerified';

@Injectable()
export class CreateConfirmTokenUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private emailProvider: IJobMailProvider,
    private jwt: JwtService,
  ) {}

  async execute(user_id: string): Promise<string> {

    const user = await this.userRepository.findById(user_id)

    if(user.verified_at === null) {
      throw new UserAlreadyVerified()
    }

    const confirmToken = this.jwt.sign({
      user_id
    }, {
      secret: process.env.JWT_CONFIRM_SECRET_KEY,
      expiresIn: process.env.JWT_CONFIRM_TIME
    })

    await this.emailProvider.sendConfirmTokenJob(user.email, confirmToken)
    return confirmToken

  
  }
}