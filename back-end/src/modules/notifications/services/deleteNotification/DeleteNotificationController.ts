import { Controller, UseGuards, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';
import { DeleteNotificationUseCase } from './DeleteNotificationUseCase';

interface IPayload {
  id: string
}

@Controller("/notifications")
@UseGuards(AuthGuard("jwt"))
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