
import { Delete, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import { DeleteUserUseCase } from './DeleteUserUseCase';

interface IPayload {
  id: string
}

@Controller("/users")
export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ) {}

  @Delete("/:id")
  async handle(@Param() param: IPayload): Promise<void> {
    await this.deleteUserUseCase.execute(param.id)
  }
}