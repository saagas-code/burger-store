import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';
import { ListMyNotificationUseCase } from './ListMyNotificationUseCase';
import { GetUser } from 'src/shared/decorators/user.decorator';
import { IUserViewHTTP } from 'src/modules/users/views/UserViewHTTP';
import { Notification } from '../../entities/Notification';
import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';


@Controller("/notifications")
@UseGuards(AccessTokenAuthGuard)
export class ListMyNotificationController {
  constructor(
    private listMyNotificationUseCase: ListMyNotificationUseCase
  ) {}

  @Get("/me")
  // @UseGuards(ensureAdmin)
  async handle(@GetUser() user: IUserViewHTTP): Promise<Notification[]> {
    const notifications = await this.listMyNotificationUseCase.execute(user.id)
    return notifications
  }
}