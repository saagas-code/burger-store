import { Controller, Post, Body } from "@nestjs/common";
import { CreateProductDTO } from "../../DTO/CreateProductDTO";
import { CreateProductUseCase } from "./createProductUseCase";


@Controller("/products")

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase
  ) {}

  @Post("/")
  async handle(@Body() body: CreateProductDTO): Promise<void> {
    await this.createProductUseCase.execute(body)
    return
  }
}