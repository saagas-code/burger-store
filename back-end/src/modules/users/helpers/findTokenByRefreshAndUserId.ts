import { UserToken } from "../entities/UserToken"


const findTokenByRefreshAndUserId = (list: UserToken[], refresh_token: string): UserToken => {
  const token = list.find((token) => 
    token.refresh_token === refresh_token
  )

  return token
}


export {findTokenByRefreshAndUserId}