
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { INotificationRepository } from 'src/modules/notifications/database/interface/INotificationRepository';
import { UserNotExists } from '../../errors/UserNotExists';
import { UserAlreadyVerified } from '../../errors/UserAlreadyVerified';

@Injectable()
export class ConfirmUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private notificationRepository: INotificationRepository
  ) {}

  async execute(user_id: string): Promise<void> {
    
    const user = await this.userRepository.findById(user_id);
    if(!user) {
      throw new UserNotExists();
    }
    if(user.verified_at != null) {
      throw new UserAlreadyVerified()
    }

    const data = {
      verified_at: new Date()
    }
    await this.userRepository.update(user.id, data)
    await this.notificationRepository.create('accountConfirmed', user.id)

  }
}