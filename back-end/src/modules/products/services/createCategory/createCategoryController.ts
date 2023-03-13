import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { CreateCategoryUseCase } from './createCategoryUseCase';


@Controller("/categories")

export class CreateCategoryController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase
  ) {}

  @Post("/")
  async handle(@Body() body: CreateUserDTO) {
    const result = await this.createCategoryUseCase.execute(body)
    return result;
  }
}