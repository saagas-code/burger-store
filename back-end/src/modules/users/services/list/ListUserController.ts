
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import { ListUserUseCase } from './ListUserUseCase';


@Controller("/users")
export class ListUserController {
  constructor(
    private listUserUseCase: ListUserUseCase
  ) {}

  @Get("/")
  async handle(): Promise<IUserViewHTTP[]> {
    const result = await this.listUserUseCase.execute()
    return result
  }
}