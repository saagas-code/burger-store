import { Inject, Injectable } from "@nestjs/common";
import { INotificationRepository } from "../../interface/INotificationRepository";
import { Notification } from 'src/modules/notifications/entities/Notification';
import { NotificationKey, notificationOptions } from "./NotificationRepository";
import { RedisService } from 'src/config/redis';


@Injectable()
export class NotificationRepositoryCache implements INotificationRepository {
  constructor(
    private readonly redis: RedisService,
    @Inject('INotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}
  
  async create(notificationType: NotificationKey, user_id: string): Promise<void> {
    await this.notificationRepository.create(notificationType, user_id)
    await this.redis.del("notifications")
  }

  async createByAdmin(title: string, message: string, user_id: any): Promise<void> {
    await this.notificationRepository.createByAdmin(title, message, user_id)
    await this.redis.del("notifications")
  }

  
  async list(): Promise<Notification[]> {
    const cachedNotifications = await this.redis.get("notifications")

    if(!cachedNotifications) {
      const notifications = await this.notificationRepository.list()
      
      await this.redis.set(
        "notifications",
        JSON.stringify(notifications),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
    
      return notifications;
    }

    return JSON.parse(cachedNotifications)
  }


  async delete(notification_id: any): Promise<void> {
    await this.notificationRepository.delete(notification_id)
    await this.redis.del("notifications")
  }

  async getById(notification_id: string): Promise<Notification> {
    const cachedNotifications = await this.redis.get("notifications")

    if(!cachedNotifications) {
      const notifications = await this.notificationRepository.list()
      const notificationFiltered = notifications.find((ntf) => ntf.id === notification_id)

      await this.redis.set(
        "notifications",
        JSON.stringify(notifications),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )

      return notificationFiltered
    }

    return JSON.parse(cachedNotifications)
  }

  async listByUserId(user_id: string): Promise<Notification[]> {
    const cachedNotifications = await this.redis.get("notifications")

    if(!cachedNotifications) {
      const notifications = await this.notificationRepository.list()
      const notificationFiltered = notifications.filter((ntf) => ntf.user_id === user_id)

      await this.redis.set(
        "notifications",
        JSON.stringify(notifications),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return notificationFiltered
    }
    
    const notificationsParsed = JSON.parse(cachedNotifications)
    const notificationsFiltered = notificationsParsed.filter((ntf: Notification) => ntf.user_id === user_id)
    return notificationsFiltered
  }

  async updateOneReadById(notification_id: string): Promise<void> {
    await this.notificationRepository.updateOneReadById(notification_id)
    await this.redis.del("notifications")
  }

  async updateAllReadByUserId(user_id: string): Promise<void> {
    await this.notificationRepository.updateAllReadByUserId(user_id)
    await this.redis.del("notifications")
  }
}

