import { Notification } from "../../entities/Notification";


export abstract class INotificationRepository {
  abstract findById(notification_id: string): Promise<Notification>
  abstract list(): Promise<Notification[]>
  abstract listMy(user_id: string): Promise<Notification[]>
  abstract readOne(notification_id: string): Promise<void>
  abstract readAll(user_id: string): Promise<void>

}