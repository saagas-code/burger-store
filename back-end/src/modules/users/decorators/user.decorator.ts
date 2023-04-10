import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from '../entities/User';

//Retorna o id do usuário que está dentro do token JWT
export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})