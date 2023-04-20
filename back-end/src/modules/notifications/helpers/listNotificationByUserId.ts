import { Notification } from "../entities/Notification"


const listNotificationByUserId = (notifications: Notification[], notification_id: string): Notification[] => {
  const result = notifications.filter((ntf) => ntf.id === notification_id)
  return result
}

export {listNotificationByUserId}