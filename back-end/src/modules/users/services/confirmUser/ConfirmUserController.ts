
import { Post, Body, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/shared/utils/fileFilter';
import { ConfirmUserUseCase } from './ConfirmUserUseCase';

interface IPayload {
  token: string
}

@Controller("/users")
export class ConfirmUserController {
  constructor(
    private confirmUserUseCase: ConfirmUserUseCase
  ) {}

  @Post("/user/verify/:token")
  @UseInterceptors(FileInterceptor('image', {
    fileFilter: fileFilter
  }))
  async handle(@Param() param: IPayload): Promise<void> {
    await this.confirmUserUseCase.execute(param.token)
  }
}