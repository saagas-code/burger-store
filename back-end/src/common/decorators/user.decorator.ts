import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "src/modules/users/entities/User";

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    console.log("Get Useeeeeeeer", req)
    return req.user;
})