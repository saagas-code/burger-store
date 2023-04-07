
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { UserNotExists } from '../../errors/UserNotExists';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import {UserView} from '../../views/UserViewHTTP'


@Injectable()
export class DeleteUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
  ) {}

  async execute(user_id: string): Promise<void> {
    
    const userExists = await this.userRepository.findById(user_id)
    if(!userExists) {
      throw new UserNotExists()
    }
    await this.userRepository.findByIdAndDelete(user_id);
    
  }
}