import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import { JwtPayload } from "jsonwebtoken";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IUsersRepository } from "src/modules/users/database/implements/IUsersRepository";
import { IUserViewHTTP, UserView } from './../../modules/users/views/UserViewHTTP';
import { UserNotExists } from './../../modules/users/errors/UserNotExists';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersRepository: IUsersRepository
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY || 'test',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtPayload): Promise<IUserViewHTTP> {
    const { id } = payload
    const user = await this.usersRepository.findById(id)
    if(!user) {
      throw new UserNotExists()
    }

    return UserView.toHTTP(user)
  }
}