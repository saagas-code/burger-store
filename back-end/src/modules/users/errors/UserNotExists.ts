
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class UserNotExists extends HttpException {
  constructor() {
    super ('Usuário não existe.', HttpStatus.NOT_FOUND)
  }
}