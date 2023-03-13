import { Controller, Get, Delete, Param } from "@nestjs/common";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";


@Controller("/categories/:id")

export class DeleteCategoryController {
  constructor(
    private deleteCategoryUseCase: DeleteCategoryUseCase
  ) {}

  @Delete("/")
  async handle(@Param('id') param: string): Promise<void> {
    console.log('testee', param)
    await this.deleteCategoryUseCase.execute(param)
    return
  }
}