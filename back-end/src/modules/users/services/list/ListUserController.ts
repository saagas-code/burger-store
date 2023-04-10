import { Get, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import { ListUserUseCase } from './ListUserUseCase';
import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';


@Controller("/users")
export class ListUserController {
  constructor(
    private listUserUseCase: ListUserUseCase
  ) {}

  @Get("/")
  @UseGuards(AccessTokenAuthGuard)
  @UseGuards(ensureAdmin)
  async handle(): Promise<IUserViewHTTP[]> {
    const result = await this.listUserUseCase.execute()

    return result
  }
}