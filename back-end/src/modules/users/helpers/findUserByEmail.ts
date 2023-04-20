import { User } from "../entities/User"

const findUserByEmail = (users: User[], email: string) => {
  const result = users.find((user) => user.email === email)
  return result
}

export {findUserByEmail}