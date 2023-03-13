
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class CategoryExists extends HttpException {
  constructor() {
    super ('Categoria já existente.', HttpStatus.CONFLICT)
  }
}