import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";

export class NotHavePermission extends HttpException {
  constructor() {
    super ('Você não possui permissão', HttpStatus.UNAUTHORIZED)
  }
}

@Injectable()
export class ensureAdmin implements CanActivate  {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const user = req.user
    
    console.log("Testeeeeeee", user)

    if(user.admin) {
      return true
    }

    throw new NotHavePermission()
  }
  
}