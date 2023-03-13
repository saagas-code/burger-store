
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class ProductExists extends HttpException {
  constructor() {
    super ('Produto já existente.', HttpStatus.CONFLICT)
  }
}