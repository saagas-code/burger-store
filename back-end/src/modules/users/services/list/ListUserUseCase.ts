
import { Inject, Injectable } from '@nestjs/common';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import {UserView} from '../../views/UserViewHTTP'
import { IUsersRepositoryCache } from '../../database/interface/IUsersRepositoryCache';


@Injectable()
export class ListUserUseCase {
  constructor(
    @Inject('IUsersRepositoryCache')
    private userRepository: IUsersRepositoryCache,
  ) {}

  async execute(): Promise<IUserViewHTTP[]> {

    const users = await this.userRepository.list();
    return users.map(UserView.toHTTP)
  }
}