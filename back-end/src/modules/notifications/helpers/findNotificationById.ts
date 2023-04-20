import { Notification } from "../entities/Notification"


const findNotificationById = (notifications: Notification[], notification_id: string): Notification => {
  const result = notifications.find((ntf) => ntf.id === notification_id)
  return result
}

export {findNotificationById}