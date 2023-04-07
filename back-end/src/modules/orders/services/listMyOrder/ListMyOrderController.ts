import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Order } from "../../entities/Order";
import { ListMyOrderUseCase } from "./ListMyOrderUseCase";


@Controller("/orders/me")
@UseGuards(AuthGuard('jwt'))
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