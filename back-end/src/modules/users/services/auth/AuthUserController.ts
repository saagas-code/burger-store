
import { Get, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthUserUseCase } from './AuthUserUseCase';
import { AuthUserDTO } from '../../DTO/AuthUserDTO';


@Controller("/auth/signin")
export class AuthUserController {
  constructor(
    private authUserUseCase: AuthUserUseCase
  ) {}

  @Get("/")
  async handle(@Body() body: AuthUserDTO): Promise<string> {
    const {email, password} = body

    return await this.authUserUseCase.execute({
      email, password
    })
  }
}