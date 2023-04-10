
import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../database/interface/INotificationRepository';
import { CreateNotificationDTO } from '../../DTO/CreateNotificationDTO';
import { IUsersRepository } from 'src/modules/users/database/interface/IUsersRepository';
import { UserNotExists } from 'src/modules/users/errors/UserNotExists';

@Injectable()
export class CreateNotificationUseCase {
  constructor(
    private notificationRepository: INotificationRepository,
    private userRepository: IUsersRepository
  ) {}

  async execute({title, message, user_id}: CreateNotificationDTO): Promise<void> {

    const user = await this.userRepository.findById(user_id);
    if(!user) {
      throw new UserNotExists();
    }

    await this.notificationRepository.createByAdmin(title, message, user_id)

    return
  }
}