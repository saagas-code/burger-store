import { Controller, Get } from "@nestjs/common";
import { Category } from "../../entities/Category";
import { ListCategoryUseCase } from "./listCategoryUseCase";


@Controller("/categories")

export class ListCategoryController {
  constructor(
    private listCategoryUseCase: ListCategoryUseCase
  ) {}

  @Get("/")
  async handle(): Promise<Category[]> {
    const list = await this.listCategoryUseCase.execute()
    return list;
  }
}