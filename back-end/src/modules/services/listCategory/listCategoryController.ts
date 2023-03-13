import { Controller, Get } from "@nestjs/common";


@Controller("/categories")

export class ListCategoryController {
  // constructor(
  //   //private listCategoryUseCase: ListCategoryUseCase
  // )

  @Get("/")
  async handle() {
    const t =  'teste'
    return t;
  }
}