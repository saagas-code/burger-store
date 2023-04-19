import { Controller, Get, UseGuards } from "@nestjs/common";
import { Order } from "../../entities/Order";
import { ListMyOrderUseCase } from "./ListMyOrderUseCase";
import { AccessTokenAuthGuard } from "src/shared/guards/tokens";


@Controller("/orders/me")
@UseGuards(AccessTokenAuthGuard)
export class ListMyOrderController {
  constructor(
    private listOrderUseCase: ListMyOrderUseCase
  ) {}

  @Get("/")
  async handle(): Promise<Order[]> {
    const orders = await this.listOrderUseCase.execute()

    return orders
  }
}