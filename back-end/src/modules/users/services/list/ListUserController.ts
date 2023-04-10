import { Get, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import { ListUserUseCase } from './ListUserUseCase';
import { AuthGuard } from '@nestjs/passport';
import { ensureAdmin } from 'src/shared/guards/ensureAdmin';
import { AccessTokenAuthGuard } from 'src/shared/guards/tokens';
import { GetUser } from '../../decorators/user.decorator';


@Controller("/users")
//@UseGuards(AuthGuard('jwt'))
@UseGuards(AccessTokenAuthGuard)
export class ListUserController {
  constructor(
    private listUserUseCase: ListUserUseCase
  ) {}

  @Get("/")
  //@UseGuards(ensureAdmin)
  async handle(@GetUser() user): Promise<IUserViewHTTP[]> {
    const result = await this.listUserUseCase.execute()
    console.log('testeeeee', user)
    return result
  }
}