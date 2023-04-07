import { Body, Controller, Get, UseGuards } from "@nestjs/common";
import { OrderDTO } from "../../DTO/OrderDTO";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/modules/users/decorators/user.decorator";
import { IUserViewHTTP } from "src/modules/users/views/UserViewHTTP";
import { ListOrderUseCase } from "./ListOrderUseCase";
import { ensureAdmin } from "src/shared/guards/ensureAdmin";
import { Order } from "../../entities/Order";


@Controller("/orders")
@UseGuards(AuthGuard('jwt'))
export class ListOrderController {
  constructor(
    private listOrderUseCase: ListOrderUseCase
  ) {}

  @Get("/")
  @UseGuards(ensureAdmin)
  async handle(): Promise<Order[]> {
    const orders = await this.listOrderUseCase.execute()

    return orders
  }
}