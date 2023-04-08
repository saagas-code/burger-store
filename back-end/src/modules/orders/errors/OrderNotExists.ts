
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class OrderNotExists extends HttpException {
  constructor() {
    super ('Pedido não encontrado', HttpStatus.NOT_FOUND)
  }
}