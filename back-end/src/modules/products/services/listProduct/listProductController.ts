import { Controller, Get } from "@nestjs/common";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";
import { ListProductUseCase } from "./listProductUseCase";


@Controller("/products")

export class ListProductController {
  constructor(
    private listProductUseCase: ListProductUseCase
  ) {}

  @Get("/")
  async handle(): Promise<Product[]> {
    const result = await this.listProductUseCase.execute()
    return result;
  }
}