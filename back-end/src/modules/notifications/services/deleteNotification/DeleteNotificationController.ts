import { Controller, UseGuards, Param, Delete } from '@nestjs/common';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';
import { DeleteNotificationUseCase } from './DeleteNotificationUseCase';
import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';

interface IPayload {
  id: string
}

@Controller("/notifications")
@UseGuards(AccessTokenAuthGuard)
export class DeleteNotificationController {
  constructor(
    private deleteNotificationUseCase: DeleteNotificationUseCase
  ) {}

  @Delete("/:id")
  @UseGuards(ensureAdmin)
  async handle(@Param() param: IPayload): Promise<void> {
    await this.deleteNotificationUseCase.execute(param.id)
  }
}