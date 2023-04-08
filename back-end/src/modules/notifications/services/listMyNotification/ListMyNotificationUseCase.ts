
import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../database/interface/INotificationRepository';
import { IUsersRepository } from 'src/modules/users/database/interface/IUsersRepository';
import { Notification } from '../../entities/Notification';


@Injectable()
export class ListMyNotificationUseCase {
  constructor(
    private notificationRepository: INotificationRepository,
    private userRepository: IUsersRepository
  ) {}

  async execute(user_id: string): Promise<Notification[]> {

    const notifications = await this.notificationRepository.listByUserId(user_id)

    return notifications
  }
}