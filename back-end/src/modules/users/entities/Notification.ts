
import { User } from './User';

export class Notification {
  id: string
  title: string
  message: string
  read: boolean
  user_id: string
  user?: User
}