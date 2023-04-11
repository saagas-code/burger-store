
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class NotificationNotFound extends HttpException {
  constructor() {
    super ('Notificação não encontrada', HttpStatus.NOT_FOUND)
  }
}