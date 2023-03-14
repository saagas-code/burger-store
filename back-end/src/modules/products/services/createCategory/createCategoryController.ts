import { Controller, Post, Body } from "@nestjs/common";
import { CreateCategoryDTO } from "../../DTO/CreateCategoryDTO";
import { CreateCategoryUseCase } from './createCategoryUseCase';


@Controller("/categories")

export class CreateCategoryController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase
  ) {}

  @Post("/")
  async handle(@Body() body: CreateCategoryDTO): Promise<void> {
    await this.createCategoryUseCase.execute(body)
    return
  }
}