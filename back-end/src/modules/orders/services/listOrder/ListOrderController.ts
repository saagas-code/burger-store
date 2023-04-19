import {Controller, Get, UseGuards } from "@nestjs/common";
import { ListOrderUseCase } from "./ListOrderUseCase";
import { ensureAdmin } from "src/shared/guards/ensureAdmin";
import { Order } from "../../entities/Order";
import { AccessTokenAuthGuard } from "src/shared/guards/tokens";


@Controller("/orders")
@UseGuards(AccessTokenAuthGuard)
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