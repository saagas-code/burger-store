import { Get, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import { ListUserUseCase } from './ListUserUseCase';
import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';
import { GetUser } from '../../decorators/user.decorator';


@Controller("/users")
export class ListUserController {
  constructor(
    private listUserUseCase: ListUserUseCase
  ) {}

  @Get("/")
  @UseGuards(AccessTokenAuthGuard)
  //@UseGuards(ensureAdmin)
  async handle(@GetUser() user): Promise<IUserViewHTTP[]> {
    const result = await this.listUserUseCase.execute()

    return result
  }
}