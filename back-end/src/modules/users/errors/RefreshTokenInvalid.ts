
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class RefreshTokenInvalid extends HttpException {
  constructor() {
    super ('Token de refresh inválido', HttpStatus.UNAUTHORIZED)
  }
}