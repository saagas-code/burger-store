import { Controller, Get, Query } from "@nestjs/common";
import { Product } from "../../entities/Product";
import { ListProductUseCase } from "./listProductUseCase";

interface QueryParams {
  name: string;
  category: string;
}

@Controller("/products")

export class ListProductController {
  constructor(
    private listProductUseCase: ListProductUseCase
  ) {}

  @Get("/")
  async handle(@Query() query: QueryParams): Promise<Product[]> {
    const result = await this.listProductUseCase.execute(query)
    return result;
  }
}