
import { User } from './../entities/User';

export interface IUserViewHTTP {
  id: string
  name: string
  email: string
  admin: boolean
  image: string
  verified_at: Date
  created_at: Date
}

export class UserView {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      image: user.image,
      verified_at: user.verified_at,
      created_at: user.created_at
    }
  }
}