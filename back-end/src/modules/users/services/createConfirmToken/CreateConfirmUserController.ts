
import { UseGuards, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';
import { GetUser } from '../../decorators/user.decorator';
import { CreateConfirmTokenUseCase } from './CreateConfirmUserUseCase';

interface IPayload {
  user_id: string
  admin: boolean
}

@Controller("/users")
export class CreateConfirmTokenController {
  constructor(
    private CreateConfirmTokenUseCase: CreateConfirmTokenUseCase
  ) {}

  @Post("/verify")
  @UseGuards(AccessTokenAuthGuard)
  async handle(@GetUser() {user_id}: IPayload): Promise<void> {
    await this.CreateConfirmTokenUseCase.execute(user_id)
  }
}