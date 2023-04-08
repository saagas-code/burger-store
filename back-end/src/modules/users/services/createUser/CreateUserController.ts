
import { Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';
import { Controller } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/shared/utils/fileFilter';

@Controller("/users")
export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  @Post("/")
  @UseInterceptors(FileInterceptor('image', {
    fileFilter: fileFilter
  }))
  async handle(@Body() body: CreateUserDTO, @UploadedFile() file: Express.Multer.File): Promise<void> {
    await this.createUserUseCase.execute(body, file)
  }
}