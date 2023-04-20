import { User } from "../entities/User"

const findUserById = (users: User[], id: string) => {
  const result = users.find((user) => user.email === id)
  return result
}

export {findUserById}