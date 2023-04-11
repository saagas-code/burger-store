import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserNotExists } from "src/modules/users/errors/UserNotExists";


@Injectable()
export class ConfirmAccountTokenStrategy extends PassportStrategy(Strategy, 'confirm-token') {
  constructor() {
    super({
      secretOrKey: process.env.JWT_CONFIRM_SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    const {user_id} = payload

    return user_id
    
  }
}