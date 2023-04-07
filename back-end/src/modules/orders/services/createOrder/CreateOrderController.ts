import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateOrderUseCase } from "./CreateOrderUseCase";
import { OrderDTO } from "../../DTO/OrderDTO";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/modules/users/decorators/user.decorator";
import { IUserViewHTTP } from "src/modules/users/views/UserViewHTTP";


@Controller("/orders")
@UseGuards(AuthGuard('jwt'))
export class CreateOrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase
  ) {}

  @Post("/")
  async handle(@Body() body: OrderDTO, @GetUser() user: IUserViewHTTP): Promise<void> {
    await this.createOrderUseCase.execute(body, user.id)
  }
}