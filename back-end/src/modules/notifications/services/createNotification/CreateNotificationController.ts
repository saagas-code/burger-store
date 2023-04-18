import { Post, Body, Controller, UseGuards } from '@nestjs/common';
import { CreateNotificationDTO } from '../../DTO/CreateNotificationDTO';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';
import { CreateNotificationUseCase } from './CreateNotificationUseCase';
import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';

@Controller("/notifications")
@UseGuards(AccessTokenAuthGuard)
export class CreateNotificationController {
  constructor(
    private createNotificationUseCase: CreateNotificationUseCase
  ) {}

  @Post("/")
  @UseGuards(ensureAdmin)
  async handle(@Body() body: CreateNotificationDTO): Promise<void> {
    await this.createNotificationUseCase.execute(body)
  }
}