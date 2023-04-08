import { Notification } from "../../entities/Notification";

export interface NotificationOption {
  title: string,
  message: string
}

export abstract class INotificationRepository {
  abstract create(title: string, message: string, user_id: string): Promise<void>
  abstract getById(notification_id: string): Promise<Notification>
  abstract list(): Promise<Notification[]>
  abstract listByUserId(user_id: string): Promise<Notification[]>
  abstract updateOneReadById(notification_id: string): Promise<void>
  abstract updateAllReadByUserId (user_id: string): Promise<void>

}