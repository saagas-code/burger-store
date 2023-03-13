
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class CategoryNotExists extends HttpException {
  constructor() {
    super ('Categoria não existe.', HttpStatus.NOT_FOUND)
  }
}