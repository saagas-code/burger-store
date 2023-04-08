import { Notification } from "../../entities/Notification";


export abstract class INotificationRepository {
  abstract findById(user_id: string, notification_id: string): Promise<Notification>
  abstract listNotifications(): Promise<Notification[]>
  abstract listMyNotifications(user_id: string): Promise<Notification[]>
  abstract readOneNotification(user_id: string, notification_id: string): Promise<void>
  abstract readAllNotifications(user_id: string): Promise<void>

}