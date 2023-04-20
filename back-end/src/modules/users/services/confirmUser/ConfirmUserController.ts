
import { UseGuards, Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ConfirmUserUseCase } from './ConfirmUserUseCase';
import { ConfirmAccountTokenAuthGuard } from 'src/shared/guards/tokens';
import { GetUser } from '../../decorators/user.decorator';

interface IPayload {
  user_id: string
  admin: boolean
}

@Controller("/users")
export class ConfirmUserController {
  constructor(
    private confirmUserUseCase: ConfirmUserUseCase
  ) {}

  @Get("/verify")
  @UseGuards(ConfirmAccountTokenAuthGuard)
  async handle(@GetUser() currentUser: IPayload): Promise<void> {
    await this.confirmUserUseCase.execute(currentUser.user_id)
  }
}