
import { Post, Body } from '@nestjs/common';
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { Controller } from '@nestjs/common';
import { AuthUserUseCase } from './AuthUserUseCase';


@Controller("/users")
export class CreateUserController {
  constructor(
    private authUserUseCase: AuthUserUseCase
  ) {}

  @Post("/")
  async handle(@Body() body: CreateUserDTO): Promise<void> {
    const {email, password} = body

    await this.authUserUseCase.execute({
      email, password
    })
  }
}