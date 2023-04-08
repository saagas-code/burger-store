import { Controller, Delete, UseGuards, Param } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ensureAdmin } from "src/shared/guards/ensureAdmin";
import { DeleteOrderUseCase } from "./DeleteOrderUseCase";

interface IPayload {
  id: string
}

@Controller("/orders/")
@UseGuards(AuthGuard('jwt'))
export class DeleteOrderController {
  constructor(
    private deleteOrderUseCase: DeleteOrderUseCase
  ) {}

  @Delete("/:id")
  @UseGuards(ensureAdmin)
  async handle(@Param() param: IPayload): Promise<void> {

    await this.deleteOrderUseCase.execute(param.id)

  }
}