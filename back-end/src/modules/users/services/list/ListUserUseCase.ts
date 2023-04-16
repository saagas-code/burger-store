
import { Inject, Injectable } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import {UserView} from '../../views/UserViewHTTP'
import { IUsersRepository } from '../../database/interface/IUsersRepository';


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