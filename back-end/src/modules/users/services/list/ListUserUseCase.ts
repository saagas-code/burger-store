
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import {UserView} from '../../views/UserViewHTTP'


@Injectable()
export class ListUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IUserViewHTTP[]> {

    const users = await this.userRepository.list();
    return users.map(UserView.toHTTP)
  }
}