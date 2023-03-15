import { Controller, Get, Query } from "@nestjs/common";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";
import { ListProductUseCase } from "./listProductUseCase";

interface IRequest {
  name: string;
  category: string;
}

@Controller("/products")

export class ListProductController {
  constructor(
    private listProductUseCase: ListProductUseCase
  ) {}

  @Get("/")
  async handle(@Query() query: {name: string, category: string}): Promise<Product[]> {
    const result = await this.listProductUseCase.execute(query)
    return result;
  }
}