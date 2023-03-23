
import { Get, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthUserUseCase } from './AuthUserUseCase';
import { AuthUserDTO } from '../../DTO/AuthUserDTO';

interface IResponse {
  access_token: string,
  refresh_token: string
}

@Controller("/auth/signin")
export class AuthUserController {
  constructor(
    private authUserUseCase: AuthUserUseCase
  ) {}

  @Get("/")
  async handle(@Body() body: AuthUserDTO): Promise<IResponse> {
    const {email, password} = body

    const result = await this.authUserUseCase.execute({
      email, password
    })

    return result
  }
}