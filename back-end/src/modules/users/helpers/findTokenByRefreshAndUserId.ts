import { UserToken } from "../entities/UserToken"


const findTokenByRefreshAndUserId = (list: UserToken[], refresh_token: string, user_id: string): UserToken => {
  const token = list.find((token) => (
    token.refresh_token === refresh_token &&
    token.user_id === user_id
  ))

  return token
}


export {findTokenByRefreshAndUserId}