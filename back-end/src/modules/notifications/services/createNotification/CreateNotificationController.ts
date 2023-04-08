import { Post, Body, Controller, UseGuards } from '@nestjs/common';
import { CreateNotificationDTO } from '../../DTO/CreateNotificationDTO';
import { AuthGuard } from '@nestjs/passport';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';
import { CreateNotificationUseCase } from './CreateNotificationUseCase';

@Controller("/notifications")
@UseGuards(AuthGuard("jwt"))
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