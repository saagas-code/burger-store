import { Notification } from "./Notification"
import { randomUUID } from 'crypto';


export class User {
  id: string
  name: string
  email: string
  password: string
  admin: boolean
  image: string
  verified_at: Date
  created_at: Date
  notifications?: Notification

  public set verify(date: Date) {
    this.verified_at = date
  }
}

