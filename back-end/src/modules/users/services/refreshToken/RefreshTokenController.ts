import { UseGuards, Get, Headers } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';
import { AccessTokenAuthGuard, RefreshTokenAuthGuard } from 'src/shared/guards/tokens';
import { GetUser } from '../../decorators/user.decorator';

interface IPayload {
  refresh_token: string
}

interface IResponse {
  access_token: string,
  refresh_token: string
}

@Controller("/auth/refresh")

export class RefreshTokenController {
  constructor(
    private refreshTokenUseCase: RefreshTokenUseCase
  ) {}

  @Get("/")
  @UseGuards(RefreshTokenAuthGuard)
  async handle(@Headers("authorization") authorization: string,@GetUser() user_id: string): Promise<IResponse> {
    const token = authorization.split(' ')[1];

    const result = await this.refreshTokenUseCase.execute(token, user_id)

    return result
  }
}