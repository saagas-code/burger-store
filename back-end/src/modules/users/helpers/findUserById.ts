import { User } from "../entities/User"

const findUserById = (users: User[], id: string): User => {
  const result = users.find((user) => user.id === id)
  return result
}

export {findUserById}