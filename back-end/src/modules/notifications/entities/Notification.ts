import { User } from "src/modules/users/entities/User";

export class Notification {
  id: string;
  title: string;
  message: string;
  read: Date;
  user_id: string;
  user?: User
  created_at?: Date
}