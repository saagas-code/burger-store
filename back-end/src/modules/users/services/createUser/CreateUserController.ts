
import { Post, Body } from '@nestjs/common';
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';
import { Controller } from '@nestjs/common';

@Controller("/users")
export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  @Post("/")
  async handle(@Body() body: CreateUserDTO): Promise<void> {
    await this.createUserUseCase.execute(body)
  }
}