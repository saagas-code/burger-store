import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { JwtPayload } from "jsonwebtoken";
import { ExtractJwt, Strategy } from "passport-jwt";


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