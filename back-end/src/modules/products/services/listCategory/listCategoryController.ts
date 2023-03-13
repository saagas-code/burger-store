import { Controller, Get } from "@nestjs/common";
import { ListCategoryUseCase } from "./listCategoryUseCase";


@Controller("/categories")

export class ListCategoryController {
  constructor(
    private listCategoryUseCase: ListCategoryUseCase
  ) {}

  @Get("/")
  async handle() {
    const list = await this.listCategoryUseCase.execute()
    return list;
  }
}