import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../database/interface/INotificationRepository';
import { NotificationNotFound } from 'src/modules/notifications/errors/NotificationNotFound';

@Injectable()
export class DeleteNotificationUseCase {
  constructor(
    private notificationRepository: INotificationRepository,
  ) {}

  async execute(notification_id: string): Promise<void> {

    const notification = await this.notificationRepository.getById(notification_id)
    if(!notification) {
      throw new NotificationNotFound()
    }

    console.log(notification)
    return
    await this.notificationRepository.delete(notification_id)

    return
  }
}