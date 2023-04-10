
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class UserAlreadyVerified extends HttpException {
  constructor() {
    super ('Usuário já esta verificado', HttpStatus.BAD_REQUEST)
  }
}