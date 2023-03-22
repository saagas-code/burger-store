import { Notification } from "./Notification"

export class User {
  id: string
  name: string
  email: string
  password: string
  admin?: boolean
  image?: string
  verified_at?: Date
  created_at?: Date
  notifications?: Notification
}

