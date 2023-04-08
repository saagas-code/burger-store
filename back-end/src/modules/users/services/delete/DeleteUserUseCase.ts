
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../database/interface/IUsersRepository';
import { UserNotExists } from '../../errors/UserNotExists';
import { IUserViewHTTP } from '../../views/UserViewHTTP';
import {UserView} from '../../views/UserViewHTTP'
import { IStorageProvider } from 'src/shared/providers/StorageProvider/IStorageProvider';


@Injectable()
export class DeleteUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private storageProvider: IStorageProvider
  ) {}

  async execute(user_id: string): Promise<void> {
    
    const user = await this.userRepository.findById(user_id)
    if(!user) {
      throw new UserNotExists()
    }
    
    await this.storageProvider.delete(user.image)

    await this.userRepository.findByIdAndDelete(user_id);
    
  }
}