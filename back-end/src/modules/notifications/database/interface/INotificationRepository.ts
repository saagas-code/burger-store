import { Notification } from "../../entities/Notification";
import { NotificationKey } from "../prisma/repositories/NotificationRepository";

export abstract class INotificationRepository {
  abstract create(notificationType: NotificationKey, user_id: string): Promise<void>
  abstract createByAdmin(title: string, message: string, user_id): Promise<void>
  abstract getById(notification_id: string): Promise<Notification>
  abstract list(): Promise<Notification[]>
  abstract listByUserId(user_id: string): Promise<Notification[]>
  abstract updateOneReadById(notification_id: string): Promise<void>
  abstract updateAllReadByUserId (user_id: string): Promise<void>
  abstract delete (notification_id: string): Promise<void>

}