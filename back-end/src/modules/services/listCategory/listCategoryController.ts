import { Controller, Get } from "@nestjs/common";


@Controller("/category")

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